// import { Fragment } from "react";
// import Link from "next/link";
// import { ConnectButton, Theme } from "@rainbow-me/rainbowkit";
// import { useAccount } from "wagmi";
// import Image from "next/image";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Header = () => {
//   const account = useAccount();

//   return (
//     <header className="bg-orange-400 text-gray-800 sticky top-0 z-50 grid grid-cols-3 py-5 px-5 md:px-10 shadow-md">
//       {/**left */}
//       <div className="relative flex-items center h-10 cursor-pointer my-auto">
//         <Link href="/">
//           <a>
//             <Image
//               src="https://i.imgur.com/LugD1DQ.png"
//               objectFit="contain"
//               objectPosition="left"
//               width={80}
//               height={50}
//               alt="logo"
//             />
//           </a>
//         </Link>
//       </div>
//       {/**middle*/}
//       {/* <div className="hidden lg:flex flex-grow"> */}
//       {/* <input
//           type="text"
//           placeholder="Search courses"
//           className="w-96 py-2 px-4 text-sm bg-gray-100 rounded-l-full border border-gray-700 focus:outline-none focus:border-blue-500"
//         /> */}
//       {/* <button className="bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-r-full text-white">
//           Search
//         </button> */}
//       {/* </div> */}
//       {/**MID-RIGHT*/}
//       <div className="hidden ml-6 font-medium text-lg lg:flex">
//         <Link href="/">
//           <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white">
//             Home
//           </a>
//         </Link>
//         <Link href="/all-courses">
//           <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white">
//             Courses
//           </a>
//         </Link>
//         <Link href="/create-course">
//           <a
//             className="px-3 py-2 hover:bg-orange-400 rounded-md text-white"
//             target="_blank"
//           >
//             {" "}
//             Be an Instructor{" "}
//           </a>
//         </Link>
//         <Link href={`/mycourses/${account.address}`}>
//           <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-white">
//             My Courses
//           </a>
//         </Link>
//       </div>
//       <div className="flex items-center ml-4">
//         <ConnectButton label="Log In" className="bg-olive-500" />
//       </div>
//     </header>
//   );
// };
// export default Header;

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
    </header>
  );
};
export default Header;
