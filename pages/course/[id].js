import { useState } from "react";
import Header from "../../components/Header";
import FeaturedCourses from "../../components/FeaturedCourses";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectContract from "../../utils/primeroContract";
import Alert from "../../components/Alert";
import {
  EmojiHappyIcon,
  TicketIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import courses from "../course";
import randomizeImage from "../../utils/randomizeImage";

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <section className="relative py-12">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-6 lg:mb-12">
          {course.courseTitle}
        </h1>
        <div className="flex flex-wrap-reverse lg:flex-nowrap">
          <div className="w-full pr-0 lg:pr-24 xl:pr-32">
            <div className="mb-8 w-full aspect-w-5 aspect-h-6 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
           
                src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
                alt="event image"
                layout="fill"
              />
            </div>
            <p>{course.courseDescription}</p>
          </div>

          <div className="max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
            <button
              type="button"
              className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buy course for {course.coursePrice} MATIC
            </button>
            <div className="flex item-center">
              <UsersIcon className="w-6 mr-2" />
              <span className="truncate">
                Course Instructor: {course.instructorName}
              </span>
            </div>
            <div className="flex item-center my-40">
              <span className="truncate text-black pl-20 font-extrabold sm:text-xl md:text-xl">

              </span>
              {/* <FeaturedCourses /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
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
