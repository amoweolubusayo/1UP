import Link from "next/link";
import Image from "next/image";
import Features from "./Features";
import React from "react";
import { LockClosedIcon, RefreshIcon } from "@heroicons/react/outline";
import Card from "../components/Card";

const data = [
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/c9347fbc-9c3b-4514-9f2f-651a3773bbde",
    price: "12 TXZ",
    name: "Chelsea Mixed Reality Tshirt"
  },
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/cc8570ba-3eec-4d3f-a552-1e8f37145cf5",
    price: "25 TXZ",
    name : "Manchester City Mixed Reality Buses"
  },
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/b5f6e8ab-e37a-4b09-8e56-cb62d2c443ee",
    price: "19 TXZ",
    names: "Nike X RTFKT Mixed Reality AirJordan"
  },
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/c7c8a90f-a993-4c0b-997c-17852d5bbf4e",
    price: " 14 TXZ",
    name : "Jamie Oliver - Personal Nutrionist"

  },
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/f28c73e5-324d-4b0b-8fcc-c999c1438100",
    price: "14 TXZ",
    name : "Serena Williams - Personal Tennis Coach"
  },
  {
    video:
      "https://github.com/amoweolubusayo/1UP/assets/20168921/d6a019fd-168f-4ed9-90b4-a67d28dc735b",
    price: "14 TXZ",
    name : "Barack Obama - Life Coach"
  },
];
export default function LandingPage() {
  return (
    <>
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-white-400 to-gray-400">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">
                1UP{" "}
                <span className="font text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl">
                  Mixed Reality
                </span>
              </h1>
            </div>
          </div>
        </div> */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <Card key={index} video={item.video} price={item.price} name = {item.name} />
        ))}
      </div>
      <Features />
    </>
  );
}
