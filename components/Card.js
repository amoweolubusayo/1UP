import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

const rpcUrl = "https://ghostnet.ecadinfra.com";
const Tezos = new TezosToolkit(rpcUrl);
console.log("Tezos is", Tezos);
const network = NetworkType.GHOSTNET;

const buyNFT = async () => {
  console.log("here")
  try {
    const contract = await Tezos.wallet.at(
      "KT19sQSJsMzgsQCp4LCdd9C7T5wXse2A79Rn"
    );

    const newWallet = new BeaconWallet({
      name: "Simple dApp tutorial",
      preferredNetwork: network,
    });
    await newWallet.requestPermissions({
      network: { type: network, rpcUrl },
    });

    address = await newWallet.getPKH();

    const userBalance = await Tezos.tz.getBalance(address);
    console.log("userbalance is", userBalance);
    console.log("contract is", contract);
    const operation = await contract.methods
      .buy("0.1", address)
      .send();
    await operation.confirmation();
    console.log(`NFT bought by ${address}`);
  } catch (error) {
    console.error("Error buying NFT:", error);
  }
};

const Card = ({ image, name, video, price }) => (
  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
    <div className="md:flex-col">
      <div className="md:flex-shrink-0">
        <HoverVideoPlayer
          videoSrc={video}
          pausedOverlay={
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {name}
        </div>
        <p className="mt-2 text-gray-500">{price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={buyNFT}>
          Buy 
        </button>
      </div>
    </div>
  </div>
);
export default Card;
