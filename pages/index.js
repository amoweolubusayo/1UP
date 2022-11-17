import { ethers } from "ethers";
import { useEffect, useState, React } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Header from "../components/Header";
import FeaturedCourses from "../components/FeaturedCourses";
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function Home() {
  return (
    <>
      <Header />
      <FeaturedCourses />
    </>
  );
}
