import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
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

// const ipfsGateway = "https://ipfs.io/ipfs/";

// async function getVideosByTopic(topic) {
//   console.log(await topic);
//   console.log("got here");
//   const response = await fetch(
//     `https://cors-anywhere.herokuapp.com/https://ipfs-search.com/api/v1/search?query=${topic}`,
//     { headers: { "X-Requested-With": "XMLHttpRequest" } }
//   );
//   console.log("response", response);
//   const data = await response.json();
//   const videos = data.results.map((result) => ({ hash: result.hash }));
//   const randomIndex = Math.floor(Math.random() * videos.length);
//   const randomVideo = videos[randomIndex];
//   const videoUrl = ipfsGateway + randomVideo.hash;
//   return videoUrl;
// }

const API_TOKEN = "bd350c21-1e08-4528-8074-c8f4b8339ca2";

async function getRandomVideo(topic) {
  const videos = await getVideosByTopic(topic);
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];
  const videoUrl = randomVideo.playbackId;
  return videoUrl;
}

// async function getVideosByTopic(topic) {
//   const response = await fetch(`https://livepeer.studio/api/asset`, {
//     headers: {
//       Authorization: `Bearer ${API_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log("Response", response);
//   const videos = data.map((result) => ({ playbackId: result.playbackId }));
//   return videos;
// }

// async function fetchVideos() {
//   const token = "bd350c21-1e08-4528-8074-c8f4b8339ca2";
//   const response = await fetch("https://livepeer.studio/api/asset", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   //const data = await response.json();
//   console.log(await response.json());
//   // const playbackIds = data.map((video) => video.playbackId);
//   // return playbackIds;
// }

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
  const [selectedCategory, setSelectedCategory] = useState("");
  const { loading, error, data } = useQuery(FEATURED_COURSES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <header className="shadow overflow-x-auto">
        <div className="flex items-center justify-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "" ? "bg-orange-500" : "bg-orange-400"
            } inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Solidity"
                ? "bg-orange-500"
                : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Solidity")}
          >
            Solidity
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Rust" ? "bg-orange-500" : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Rust")}
          >
            Rust
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Hardhat" ? "bg-orange-500" : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Hardhat")}
          >
            Hardhat
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Lens" ? "bg-orange-500" : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Lens")}
          >
            Lens
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Subgraphs"
                ? "bg-orange-500"
                : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Subgraphs")}
          >
            The Graph
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "Livepeer"
                ? "bg-orange-500"
                : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("Livepeer")}
          >
            Livepeer
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "ENS" ? "bg-orange-500" : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("ENS")}
          >
            ENS
          </a>
          <a
            className={`whitespace-nowrap ${
              selectedCategory === "NFT" ? "bg-orange-500" : "bg-orange-400"
            } ml-4 inline-block rounded-full py-2 px-8 text-center font-medium text-white hover:text-white hover:bg-orange-700 hover:border-transparent`}
            onClick={() => setSelectedCategory("NFT")}
          >
            NFTs
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
            {data.courses
              .filter((course) =>
                selectedCategory
                  ? course.courseTitle.includes(selectedCategory)
                  : true
              )
              .map((course) => (
                <div
                  key={course.id}
                  className="group relative overflow-hidden shadow-lg rounded-md bg-white"
                >
                  <Player
                    title={course.courseTitle}
                    src={randomizeVideo()}
                    className="w-full h-full object-scale-down"
                    priority
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

            {/* {data.courses.map((course) => (
              <div
                key={course.id}
                className="group relative overflow-hidden shadow-lg rounded-md bg-white"
              >
                <Player
                  title={course.courseTitle}
                  src={randomizeVideo()}
                  className="w-full h-full object-scale-down"
                  priority
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
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
