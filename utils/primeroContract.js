import primeroAbi from "./primeroAbi.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x6c7F1A0014a68a7EBf1483691507502f92B3e241";
    const contractABI = primeroAbi.abi;
    let primeroContract;
    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") {
          //checking for eth object in the window, see if they have wallet connected to Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          console.log("contractABI", contractABI);
          primeroContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          throw new Error('Please connect to the Polygon Mumbai network.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return primeroContract;
  }
  
  export default connectContract;
  