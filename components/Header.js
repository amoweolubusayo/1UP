import { Fragment, useState } from "react";
import Link from "next/link";
import { ConnectButton, Theme } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { TezosToolkit } from "@taquito/taquito";

let wallet;
let address;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setWalletBalance] = useState("");
  const [connectedAccount, setConnectedAccount] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const rpcUrl = "https://ghostnet.ecadinfra.com";
  const Tezos = new TezosToolkit(rpcUrl);
  console.log("Tezos is", Tezos);
  const network = NetworkType.GHOSTNET;

  const handleConnectWallet = async () => {
    try {
      const newWallet = new BeaconWallet({
        name: "Simple dApp tutorial",
        preferredNetwork: network,
      });
      await newWallet.requestPermissions({
        network: { type: network, rpcUrl },
      });

      address = await newWallet.getPKH();
      const balanceMutez = await Tezos.tz.getBalance(address);
      balance = balanceMutez.div(1000000).toFormat(2);
      wallet = newWallet;
      console.log("wallet is", wallet);
      console.log("balance is", balance);
      console.log("address is", address);

      setWalletConnected(true);
      setConnectedAccount(address);
      setWalletBalance(balance);
    } catch (error) {
      console.log(error);
      setMessage("Error: Unable to connect wallet.");
    }
  };
  const handleDisconnectWallet = async () => {
    wallet.client.clearActiveAccount();
    location.reload();
  };

  return (
    <header className="text-gray-800 sticky top-0 z-50 py-5 px-5 md:px-10 shadow-md flex flex-wrap items-center justify-between bg-white">
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
      <div className="hidden md:block ml-6 font-medium text-lg bg-white">
        <nav className="flex flex-col md:flex-row md:ml-auto bg-white">
          <Link href="/">
            <a className="px-3 py-2 hover:bg-orange-400 rounded-md text-sm">
              Social Network
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
              FLEXR
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

            <span className="ml-2 text-sm text-black">{address}</span>
            <span className="ml-2 text-sm text-black">
              Your wallet Balance is : {balance} TZ{" "}
            </span>

            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              onClick={toggleDropdown}
            >
              Logout
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                    role="menuitem"
                    onClick={handleDisconnectWallet}
                  >
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {/* <ConnectButton label="Log In" className="bg-olive-500" /> */}
      </div>
    </header>
  );
};
export default Header;
