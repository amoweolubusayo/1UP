import { Fragment } from "react";
import Link from "next/link";
import { ConnectButton, Theme } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const account = useAccount();

  return (
    <header className="bg-orange-400 text-gray-800 sticky top-0 z-50 py-5 px-5 md:px-10 shadow-md flex flex-wrap items-center justify-between">
      {/**left */}
      <div className="relative flex-items center h-10 cursor-pointer my-auto text-center md:text-left">
        <Link href="/">
          <a>
            <Image
              src="https://i.imgur.com/LugD1DQ.png"
              objectFit="contain"
              objectPosition="left"
              width={80}
              height={50}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      {/**MID-RIGHT*/}
      {/* <div className="flex items-center">
        <ConnectButton label="Log In" className="bg-olive-500" />
      </div> */}
      <div className="ml-auto md:hidden">
        <button
          type="button"
          className="block text-gray-800 hover:text-white focus:text-white focus:outline-none"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:block ml-6 font-medium text-lg">
        <nav className="flex flex-col md:flex-row md:ml-auto">
          <Link href="/">
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white text-sm">
              Home
            </a>
          </Link>
          <Link href="/all-courses">
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white text-sm">
              Courses
            </a>
          </Link>
          <Link href="/create-course">
            <a
              className="px-3 py-2 hover:bg-orange-400 rounded-md text-white text-sm"
              target="_blank"
            >
              Be an Instructor
            </a>
          </Link>
          <Link href={`/mycourses/${account.address}`}>
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white text-sm">
            My Courses
          </a>
        </Link>
        </nav>
      </div>
      <div className="flex items-center ml-4">
        <ConnectButton label="Log In" className="bg-olive-500" />
      </div>
      {/**Mobile menu */}
  <div className="absolute w-full md:hidden top-16 left-0 bg-orange-400 text-gray-800 py-2 px-3 rounded-b-md">
    <nav className="flex flex-col">
      <Link href="/">
        <a className="my-2 hover:bg-orange-500 rounded-md text-white text-sm block">
          Home
        </a>
      </Link>
      <Link href="/all-courses">
<a className="my-2 hover:bg-orange-500 rounded-md text-white text-sm block">
Courses
</a>
</Link>
<Link href="/create-course">
<a className="my-2 hover:bg-orange-500 rounded-md text-white text-sm block">
Be an Instructor
</a>
</Link>
<Link href={`/mycourses/${account.address}`}>
<a className="my-2 hover:bg-orange-500 rounded-md text-white text-sm block">
My Courses
</a>
</Link>
<ConnectButton label="Log In" className="bg-olive-500 my-2" />
</nav>

  </div>
    </header>
  );
};
export default Header;
