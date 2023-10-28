import Link from "next/link";
import Image from "next/image";
import Features from "./Features";
import React from "react";
import { LockClosedIcon, RefreshIcon } from "@heroicons/react/outline";
import Card from "../components/Card";

const data = [
  {
    video: "video1.mp4",
    price: "Price 1",
  },
  {
    video: "video2.mp4",
    price: "Price 2",
  },
  {
    video: "video3.mp4",
    price: "Price 3",
  },
  {
    video: "video1.mp4",
    price: "Price 1",
  },
  {
    video: "video2.mp4",
    price: "Price 2",
  },
  {
    video: "video3.mp4",
    price: "Price 3",
  },
];
export default function LandingPage() {
  return (
    <>
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-white-400 to-gray-400">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">
                1UP{" "}
                <span className="font text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl">
                  Mixed Reality
                </span>
              </h1>
            </div>
          </div>
        </div> */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <Card key={index} video={item.video} price={item.price} />
        ))}
      </div>
    </>
  );
}
