import { Fragment } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const solutions = [
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: "",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: "",
  },
];
const callsToAction = [];
const resources = [
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: "",
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span>Open menu</span>
            </div>
          </div>
          <div className="relative">
            {({ open }) => (
              <>
                <div
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                >
                  <div className="pr-15">
                    <select
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Browse</option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <span className="pr-55">
                    {/* <input
                        type="text"
                        name="course"
                        id="course"
                        className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Find courses"
                      /> */}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10"
            >
              About
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10"
            >
              Become an Instructor
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10"
            >
              My Courses
            </a>
            <ConnectButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;