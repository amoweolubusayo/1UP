import { Fragment, useState } from "react";
import Link from "next/link";
import { ConnectButton, Theme } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const account = useAccount();
  const [walletConnected, setWalletConnected] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState("");
  const handleConnectWallet = async () => {
    try {
      // Check if Adena wallet object exists
      // if (!window.adena) {
      //open adena.app in a new tab if the adena object is not found
      window.open(
        "https://chrome.google.com/webstore/detail/temple-tezos-wallet/ookjlbkiijinhpmnjffcofjonbfbgaoc",
        "_blank"
      );
      //}

      // Connect to Adena wallet
      // await window.adena.AddEstablish("Adena");

      // //Get Account details
      // const account = await window.adena.GetAccount();
      // console.log(account.address);
      setConnectedAccount(account.address);
      // Set the wallet connection status
      setWalletConnected(true);
    } catch (error) {
      console.log(error);
      setMessage("Error: Unable to connect wallet.");
    }
  };

  return (
    <header className="text-gray-800 sticky top-0 z-50 py-5 px-5 md:px-10 shadow-md flex flex-wrap items-center justify-between">
      {/**left */}
      <div className="relative flex-items center h-10 cursor-pointer my-auto text-center md:text-left">
        <Link href="">
          <a>
            <Image
              src="/images/1UPLOGO.png"
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
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-sm">
              Social
            </a>
          </Link>
          <Link href="/all-courses">
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-sm">
              Mixed
            </a>
          </Link>
          <Link href="/create-course">
            <a
              className="px-3 py-2 hover:bg-orange-400 rounded-md text-sm"
              target="_blank"
            >
              Flexr
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
        {!walletConnected ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleConnectWallet}
          >
            Connect to Tezos Wallet
          </button>
        ) : (
          <div className="flex items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Connected
            </button>
            <span className="ml-2 text-sm text-white">{connectedAccount}</span>
          </div>
        )}
        {/* <ConnectButton label="Log In" className="bg-olive-500" /> */}
      </div>
    </header>
  );
};
export default Header;
