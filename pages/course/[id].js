import { useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { gql } from "@apollo/client";
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

function Course({ course }) {
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
            <div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg"
                alt="event image"
                layout="fill"
              />
            </div>
            <p>{course.courseDescription}</p>
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
          courseDescription
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
