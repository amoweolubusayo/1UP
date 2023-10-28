import Link from "next/link";
import Image from "next/image";
import Features from "./Features";
import React from "react";
import { LockClosedIcon, RefreshIcon } from "@heroicons/react/outline";
const features = [
  {
    name: "Easy to upload Courses",
    description:
      "Monitor your student progress, and earn new revenue streams in crypto",
    icon: "",
  },
  {
    name: "NFT Certificates",
    description:
      "Buy a course as an NFT, finish the course at your own pace, and get an NFT certificate afterwards",
    icon: LockClosedIcon,
  },
  {
    name: "Multiple Sources of Income",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RefreshIcon,
  },
];
export default function LandingPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-white-400 to-gray-400">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">
                1UP{" "}
                <span className="font text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl">
                  Mixed Reality
                </span>
              </h1>
              <p className="mt-4 text-xl text-white-500 font-mono-bold">
                loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM
                LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM
                loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM
                LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM
                loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM
                LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM
                loREUM ISPUM LOREM ISPUM loREUM ISPUM LOREM ISPUM loREUM ISPUM
                LOREM ISPUM loREUM ISPUM LOREM ISPUM
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <img
                        className="w-full h-full object-contain"
                        src="https://github.com/amoweolubusayo/1UP/assets/20168921/ad3bcdaf-c263-444d-8ff4-1c83b220af09"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <Link href="/all-courses">
                    <a className="inline-block rounded-md border border-transparent bg-blue-400 py-3 px-8 text-center font-medium text-white hover:bg-orange-400">
                      Marketplace
                    </a>
                  </Link>
                  <Link href="https://primero-community.vercel.app/">
                    <a className="inline-block rounded-md border border-transparent bg-blue-400 py-3 px-8 text-center font-medium text-white hover:bg-orange-400">
                      Community
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}
