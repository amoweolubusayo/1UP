import React from "react";
import {
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
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
const Feature = () => {
  return (
    <div>
      <div className="relative bg-gray-0 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="font-semibold tracking-wider text-600 uppercase">
              Services
            </h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              As a Student, on Primero you can buy a course as an NFT, finish
              the course at your own pace, and get an NFT certificate
              afterwards! You can also list and sell your course as an NFT with
              a first timer purchase advantage!
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              As an Instructor, Primero offers you the first web3 platform to
              upload your courses, monitor your student progress, and earn new
              revenue streams in crypto for the content you created.
            </p>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-gray-500 p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
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

      <div className="grid h-screen place-items-center">
        <div className="relative bg-gray-0">
          <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-contain"
              src="https://media.istockphoto.com/photos/illustration-of-business-team-office-working-happy-multicultural-picture-id1316482152?b=1&k=20&m=1316482152&s=170667a&w=0&h=2sN3XUoHbsVOmc3N6gVzgpyiHcX_cCbZaAy0EK1lIpI="
              alt=""
            />
            <div aria-hidden="true" className="inset-0" />
          </div>

          <div className="relative mx-auto max-w-md px-12 py-4 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <p className="mt-3 text-base font-semibold uppercase tracking-wider text-black-900">
                Transform your life through decentralized education
              </p>
              <p className="mt-3 text-lg text-black-300">
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow hover:bg-gray-50"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
