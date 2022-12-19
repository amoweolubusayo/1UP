import { useCallback, useMemo, useState, useEffect } from "react";
import Header from "../../components/Header";
import FeaturedCourses from "../../components/FeaturedCourses";
import { FixedNumber, FixedDecimal } from "ethers";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectToContract from "../../utils/primeroContract";
import Alert from "../../components/Alert";
import { usePlaybackInfo } from "@livepeer/react";

import {
  EmojiHappyIcon,
  TicketIcon,
  UsersIcon,
  LinkIcon,
  StarIcon,
} from "@heroicons/react/outline";
import courses from "../course";
import randomizeImage from "../../utils/randomizeImage";
import { Player, useAssetMetrics, useCreateAsset } from "@livepeer/react";
import blenderPoster from "../../public/images/people.webp";
import randomizeVideo from "../../utils/randomizeVideo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PosterImage = () => {
  return (
    <Image
      src={blenderPoster}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
    />
  );
};

const src =
  "https://bafybeiai3lx2v67nz5nyavs27qrpkx5q7wqplwgiq63zvgq6cgqy7ndga4.ipfs.nftstorage.link";

const reviews = { href: "#", average: 4, totalCount: 117 };
const RELATED_COURSES = gql`
  query RelatedCourses {
    courses {
      id
      courseID
      instructor
      instructorName
      courseTitle
      courseDescription
      coursePrice
    }
  }
`;

function Course({ course, related }) {
  const account = useAccount();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  // const { data: metrics } = useAssetMetrics({
  //   assetId: asset?.[0].id,
  //   refetchInterval: 30000,
  // });

  // const isLoading = useMemo(
  //   () =>
  //     status === 'loading' ||
  //     (asset?.[0] && asset[0].status?.phase !== 'ready'),
  //   [status, asset],
  // );
  let stateOfPurchase = false;
  const hasPurchasedCourse = async () => {
    const primeroContract = connectToContract();
    if (primeroContract) {
      let txn = await primeroContract.fetchAllCourses();
      console.log(await txn);
      const result = await txn;
      console.log(result);
      console.log("array length", result.length);
      console.log("course name", course.courseTitle);
      let j = 0;
      for (let i = 0; i < result.length; i++) {
        console.log(await result[i].buyer, account.address);
        if (result[i].buyer == account.address) {
          console.log(await result[i].buyer, account.address);
          stateOfPurchase = true;
          console.log(stateOfPurchase);
          return true;
        } else {
          stateOfPurchase;
          console.log(stateOfPurchase);
          return false;
        }
      }
    }
  };

  // function hasPurchasedCourse() {
  //   hasPurchasedCourseAsync().then((result) => {
  //     return result;
  //   });
  // }
  const purchaseCourse = async () => {
    try {
      const primeroContract = connectToContract();
      console.log(primeroContract);
      console.log("Student Address", account);
      console.log("course ID is:", course.courseID);
      if (primeroContract) {
        let txn = await primeroContract.buyCourse(course.courseID, {
          value: FixedNumber.fromValue(11, 1),
        });
        console.log(await txn);
        setLoading(true);
        console.log("Minting...", txn.hash);
        await txn.wait();
        console.log("Minted -- ", txn.hash);
        setSuccess(true);
        setLoading(false);
        setMessage("You have successfully purchased this course");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage(`There was an error creating your course: ${error.message}`);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    hasPurchasedCourse();
  }, [hasPurchasedCourse()]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <section className="relative py-12">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-6 lg:mb-12">
            {course.courseTitle}
          </h1>
          <div className="flex flex-wrap-reverse lg:flex-nowrap">
            <div className="w-full pr-0 lg:pr-24 xl:pr-32">
              <div className="mb-8 w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <Player
                  title="Course Preview"
                  src={randomizeVideo()}
                  alt={src}
                  poster={<PosterImage />}
                />
              </div>
              <span className="font-bold mt-10 text-center">
                Course Summary
              </span>
              <p>{course.courseDescription}</p>
            </div>

            <div className="max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
              {loading && (
                <Alert
                  alertType={"loading"}
                  alertBody={"Please wait"}
                  triggerAlert={true}
                  color={"white"}
                />
              )}
              {success && (
                <Alert
                  alertType={"success"}
                  alertBody={message}
                  triggerAlert={true}
                  color={"palegreen"}
                />
              )}
              {success === false && (
                <Alert
                  alertType={"failed"}
                  alertBody={message}
                  triggerAlert={true}
                  color={"palevioletred"}
                />
              )}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
              <div className="flex item-center">
                <UsersIcon className="w-6 mr-2" />
                <span className="truncate">
                  Course Instructor: {course.instructorName}
                </span>
              </div>
              {stateOfPurchase ? (
                <>
                  <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full text-teal-800 bg-teal-100">
                    You bought this course
                  </span>
                </>
              ) : (
                <button
                  type="button"
                  className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={purchaseCourse}
                >
                  Buy course for {course.coursePrice} MATIC
                </button>
              )}
              <span className="font-bold mt-10 text-center">
                Course Summary
              </span>
              <p>{course.courseDescription}</p>
              <span className="font-bold mt-10 text-center mt-20">
                You might also like
              </span>
              <span className="text-center">Introduction to The Graph</span>
              <Player
                title="Course Preview"
                src={randomizeVideo()}
                alt={src}
                poster={<PosterImage />}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Course;

export async function getServerSideProps(context) {
  console.log("id");
  const { id } = context.params;
  console.log(id);

  const { data } = await client.query({
    query: gql`
      query Course($id: String!) {
        course(id: $id) {
          courseID
          courseTitle
          coursePrice
          courseDescription
          instructor
          instructorName
        }
      }
    `,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      course: data.course,
    },
  };
}

export const config = {
  unstable_excludeFiles: ["public/**/*"],
};
