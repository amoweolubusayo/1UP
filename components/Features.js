import React from "react";
import Link from "next/link";
import {
  UploadIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const features = [
  {
    name: "Easy to upload Courses",
    description:
      "Monitor your student progress, and earn new revenue streams in crypto",
    icon: UploadIcon,
  },
  {
    name: "NFT Certificates",
    description:
      "Buy a course as an NFT, finish at your own pace, and get an NFT certificate afterwards",
    icon: BookOpenIcon,
  },
  {
    name: "Be part of A Community",
    description:
      "With Primero, as a student and as an instructor, you get to be part of a community",
    icon: UserGroupIcon,
  },
];
const Features = () => {
  return (
    <div>
      

<div className="relative bg-gray-100 sm:pt-24 lg:pt-32">
  <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="font-bold tracking-wider text-900 uppercase">
        EXPLORE OUR AI
      </h2>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
       
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
       
      </p>

      <div className="mt-20 space-y-6">
        <div className="flex justify-between">
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder="&#xf044; Search"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder="&#xf002; Publish new post"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-2">
                  <div>
                    <div className="inline-flex items-center justify-center rounded-md bg-orange-400 p-3 text-white shadow-lg">
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
};
export default Features;
