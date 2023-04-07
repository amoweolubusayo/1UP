import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import {
  ArchiveIcon,
  EmojiHappyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { Player, useAssetMetrics, useCreateAsset } from "@livepeer/react";
import randomizeVideo from "../utils/randomizeVideo";
import blenderPoster from "../public/images/people.webp";

const PosterImage = () => {
  return (
    <Image
      src={blenderPoster}
      layout="fill"
      // objectFit="cover"
      placeholder="blur"
    />
  );
};

const FEATURED_COURSES = gql`
  query FeaturedCourses {
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

const FeaturedCourses = () => {
  const { loading, error, data } = useQuery(FEATURED_COURSES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {/* <header className="bg-slate-50 shadow">
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
    <a
    className="inline-block rounded-full border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
  >
    All Courses
  </a>
  <a
  className="whitespace-nowrap text-base font-bold text-gray-500 hover:text-gray-900 pl-20"
>
  Smart Contract Development
</a>
<a
  className="whitespace-nowrap text-base font-bold text-gray-500 hover:text-gray-900 pl-20"
>
  DEFI
</a>
<a
  className="whitespace-nowrap text-base font-bold text-gray-500 hover:text-gray-900 pl-20"
>
  Ethereum Development
</a>
<a
  className="whitespace-nowrap text-base font-bold text-gray-500 hover:text-gray-900 pl-20"
>
  The Graph
</a>
    </div>
  </header> */}
      <header className="shadow overflow-x-auto">
        <div className="flex items-center justify-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <a className="inline-block bg-orange-500 rounded-full border border-transparent py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Solidity
          </a>
          <a className="whitespace-nowrap bg-orange-400 ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Smart Contract Development
          </a>
          <a className="whitespace-nowrap bg-orange-400 ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            DEFI
          </a>
          <a className="whitespace-nowrap bg-orange-400 ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Ethereum Development
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            The Graph
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Web3 Development
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Blockchain Fundamentals
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            NFTs
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            IPFS
          </a>
          <a className="whitespace-nowrap ml-4 bg-orange-400 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent">
            Crypto Trading
          </a>
        </div>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
              All Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.courses.map((course) => (
              <div
                key={course.id}
                className="group relative overflow-hidden shadow-lg rounded-md bg-white"
              >
                <Player
                  title={course.courseTitle}
                  src={randomizeVideo()}
                  className="w-full h-full object-scale-down"
                />

                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/course/${course.id}`}>
                      <a className="hover:text-indigo-500">
                        <span className="sr-only">
                          View course details for{" "}
                        </span>
                        {course.courseTitle}
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {course.instructorName}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="flex-shrink-0 mr-1.5"></span>
                    <span className="mx-2">👍</span>
                    <span>1 vote</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
