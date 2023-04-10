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
//     <div className="relative bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <Link href="/">
//               <a>
//                 {/* <img src="https://i.imgur.com/1GHd7aI.png" alt="logo" /> */}
//                 <span className="hidden sm:block cursor-pointer font-poppins-bold text-xl">
//                   <img
//                     src="https://i.imgur.com/1GHd7aI.png"
//                     alt="logo"
//                     className="object-scale-down h-20 w-96 object-left-top"
//                   />
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="-my-2 -mr-2 md:hidden">
//             <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span>Open menu</span>
//             </div>
//           </div>
//           <div className="relative">
//             {({ open }) => (
//               <>
//                 <div
//                   className={classNames(
//                     open ? "text-gray-900" : "text-gray-500",
//                     "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   )}
//                 >
//                   <div className="pr-15">
//                     <select
//                       id="currency"
//                       name="currency"
//                       className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     >
//                       <option>Browse</option>
//                       <option></option>
//                       <option></option>
//                     </select>
//                   </div>
//                   <span className="pr-55">
//                     {/* <input
//                         type="text"
//                         name="course"
//                         id="course"
//                         className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                         placeholder="Find courses"
//                       /> */}
//                   </span>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//             <Link href="/all-courses">
//               <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10">
//                 All Courses
//               </a>
//             </Link>
//             <Link href="/create-course">
//               <a
//                 className="whitespace-nowrap text-base font-medium
//               text-gray-500 hover:text-gray-900 pr-10"
//                 target="_blank"
//               >
//                 {" "}
//                 Be an Instructor{" "}
//               </a>
//             </Link>
//             <Link href={`/mycourses/${account.address}`}>
//               <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10">
//                 My Courses
//               </a>
//             </Link>
//             {/* <Link href={`/mycourses/${account.address}`}>
//               <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pr-10">
//                 Docs
//               </a>
//             </Link> */}
//           </div>
//           <div>
//             <ConnectButton label="Log In" />
//           </div>
//         </div>
//       </div>
//     </div>
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
    // <header className="bg-white text-gray-800 sticky top-0 z-50">
    //   <div className="flex items-center justify-between px-4 py-3 lg:px-16 lg:py-5">
    //     <div className="flex items-center">
    //       <Link href="/">
    //         <a>
    //           <img
    //             src="https://i.imgur.com/1GHd7aI.png"
    //             alt="Primero Logo"
    //             className="h-8 lg:h-10"
    //           />
    //         </a>
    //       </Link>
    //       <div className="hidden ml-4 font-medium text-lg lg:flex">
    //         <Link href="/">
    //           <a className="px-3 py-2 hover:bg-white rounded-md">Home</a>
    //         </Link>
    //         <Link href="/all-courses">
    //           <a className="px-3 py-2 hover:bg-white rounded-md">All Courses</a>
    //         </Link>
    //         <Link href="/create-course">
    //           <a
    //             className="px-3 py-2 hover:bg-white rounded-md"
    //             target="_blank"
    //           >
    //             {" "}
    //             Be an Instructor{" "}
    //           </a>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex items-center">
    //       <div className="hidden lg:flex">
    //         <input
    //           type="text"
    //           placeholder="Search courses"
    //           className="w-96 py-2 px-4 text-sm bg-gray-800 rounded-l-full border border-gray-700 focus:outline-none focus:border-blue-500"
    //         />
    //         <button className="bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-r-full">
    //           Search
    //         </button>
    //       </div>
    //       <div className="flex items-center ml-4">
    //         <ConnectButton label="Log In" className="bg-olive-500" />
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="bg-white text-gray-800 sticky top-0 z-50 grid grid-cols-3 py-5 px-5 md:px-10 shadow-md">
      {/**left */}
      <div className="relative flex-items center h-10 cursor-pointer my-auto">
        <Link href="/">
          <a>
            <Image
              src="https://i.imgur.com/1GHd7aI.png"
              objectFit="contain"
              objectPosition="left"
              width={80}
              height={50}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      {/**middle*/}
      <div className="hidden lg:flex flex-grow">
        {/* <input
          type="text"
          placeholder="Search courses"
          className="w-96 py-2 px-4 text-sm bg-gray-100 rounded-l-full border border-gray-700 focus:outline-none focus:border-blue-500"
        /> */}
        {/* <button className="bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-r-full text-white">
          Search
        </button> */}
      </div>
      {/**MID-RIGHT*/}
      <div className="hidden ml-6 font-medium text-lg lg:flex">
        <Link href="/">
          <a className="px-3 py-2 hover:bg-white rounded-md">Home</a>
        </Link>
        <Link href="/all-courses">
          <a className="px-3 py-2 hover:bg-white rounded-md">Courses</a>
        </Link>
        <Link href="/create-course">
          <a className="px-3 py-2 hover:bg-white rounded-md" target="_blank">
            {" "}
            Be an Instructor{" "}
          </a>
        </Link>
        <div className="flex items-center ml-4">
          <ConnectButton label="Log In" className="bg-olive-500" />
        </div>
      </div>
    </header>
  );
};
export default Header;
