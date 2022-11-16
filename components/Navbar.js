import { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useAccount, useDisconnect } from "wagmi";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

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
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2"></a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" passHref>
                <a
                  href=""
                  className="py-4 px-2 text-500 border-b-4 border-500 font-semibold "
                >
                  Home
                </a>
              </Link>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-500 transition duration-300"
              >
                Services
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-500 transition duration-300"
              >
                About
              </a>
              <Link href="/contact" passHref>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-500 transition duration-300">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <Link href="/login" passHref>
              <a className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-500 hover:text-black transition duration-300">
                Log In
              </a>
            </Link>
            <Link href="/signup" passHref>
              <a className="py-2 px-2 font-medium text-black bg-black-500 rounded hover:bg-black-400 transition duration-300">
                Sign Up
              </a>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleClick}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />{" "}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <ul className="">
          <li className="active">
            <Link href="/" passHref>
              <a className="block text-sm px-2 py-4 text-black bg-500 font-semibold">
                Home
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a className="block text-sm px-2 py-4 hover:bg-500 transition duration-300">
                Contact Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup" passHref>
              <a className="block text-sm px-2 py-4 hover:bg-500 transition duration-300">
                Sign up
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login" passHref>
              <a className="block text-sm px-2 py-4 hover:bg-500 transition duration-300">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
{
  /* );
} */
}
