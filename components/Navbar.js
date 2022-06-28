import { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { SearchIcon } from "@heroicons/react/solid";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAccount, useDisconnect } from "wagmi";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  //   const { data: account } = useAccount();
  //   const { disconnect } = useDisconnect();
  //   const [mounted, setMounted] = useState(false);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  return (
    // mounted && (
    // <nav classNameName="border-b p-6 flex justify-between items-center shadow-lg bg-blue-500">
    //   <Link href="/">
    //     <a classNameName="inline-flex items-center p-2 mr-4 ">
    //       <svg
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //         classNameName="fill-current text-white h-8 w-8 mr-2"
    //       >
    //         <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    //       </svg>
    //       <span classNameName="text-xl text-white font-bold uppercase tracking-wide">
    //         Primero Courses
    //       </span>
    //     </a>
    //   </Link>
    //   <button
    //     classNameName="inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
    //     onClick={handleClick}
    //   >
    //     <svg
    //       classNameName="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M4 6h16M4 12h16M4 18h16"
    //       />
    //     </svg>
    //   </button>
    //   <div
    //     classNameName={`${
    //       active ? "" : "hidden"
    //     }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
    //   >
    //     <div classNameName="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
    //       <Link href="/">
    //         <a classNameName="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
    //           Home
    //         </a>
    //       </Link>
    //       <Link href="/create-nft">
    //         <a classNameName="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white ">
    //           Upload a Course
    //         </a>
    //       </Link>
    //       <Link href="/my-nfts">
    //         <a classNameName="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
    //           My Courses
    //         </a>
    //       </Link>
    //       <Link href="/dashboard">
    //         <a classNameName="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white-600 hover:text-white">
    //           Dashboard
    //         </a>
    //       </Link>
    //       {/* <ConnectButton /> */}
    //     </div>
    //   </div>
    // </nav>
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2"></a>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a
                href=""
                class="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold "
              >
                Home
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Services
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                About
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href=""
              class="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
            >
              Sign Up
            </a>
          </div>

          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* <script>
        const btn = document.querySelector("button.mobile-menu-button"); const
        menu = document.querySelector(".mobile-menu");
        btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
      </script> */}
    </nav>
  );
}
{
  /* );
} */
}
