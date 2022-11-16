import { ethers } from "ethers";
import { useEffect, useState, React } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact";
import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function Home() {
  return (
    <Layout>
      {/* <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data &&
          data.events.map((event) => (
            <li key={event.id}>
              <EventCard
                id={event.id}
                name={event.name}
                eventTimestamp={event.eventTimestamp}
                imageURL={event.imageURL}
              />
            </li>
          ))}
      </ul> */}
    </Layout>
  );
}
