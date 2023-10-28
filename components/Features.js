import { React, useState } from "react";
import Link from "next/link";
import {
  UploadIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const features = [
  {
    name: "Easy to upload Courses",
    description:
      "Monitor your student progress, and earn new revenue streams in crypto",
    icon: UploadIcon,
  },
  {
    name: "NFT Certificates",
    description:
      "Buy a course as an NFT, finish at your own pace, and get an NFT certificate afterwards",
    icon: BookOpenIcon,
  },
  {
    name: "Be part of A Community",
    description:
      "With Primero, as a student and as an instructor, you get to be part of a community",
    icon: UserGroupIcon,
  },
];

const options = [
  { value: "Jamie Oliver", label: "Jamie Oliver" },
  { value: "Obama", label: "Obama" },
  { value: "Serana Williams", label: "Serena Williams" },
  { value: "Paris Hilton", label: "Paris Hilton" },
  { value: "Ronaldo", label: "Ronaldo" },
];

const Features = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [ans, setAns] = useState("");
  const handleSelection = async (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log("Selected value:", value);

    try {
      const response = await fetch("/api/flockModel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: value }),
      });

      const data = await response.json();
      console.log(data.message);
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setAns(data.message);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
    main(value);
  };

  const main = async () => {
    try {
      const response = await fetch("/api/flockModel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: value }),
      });

      const data = await response.json();
      console.log(data.ans);
      return data.response;
      // if (response.status !== 200) {
      //   throw (
      //     data.error ||
      //     new Error(`Request failed with status ${response.status}`)
      //   );
      // }
      // setAffirmation(data.affirmation);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="relative bg-gray-100 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="font-bold tracking-wider text-900 uppercase">
              EXPLORE OUR AI - Powered by Flock
            </h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500"></p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500"></p>

            <select onChange={handleSelection} className="rounded-md">
              <option value="">-- Search --</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="text-input"></label>

            <input
              type="text"
              id="text-input"
              name="text-input"
              value={`${selectedValue} is typing...`}
              className="mt-2 p-2 border rounded-md w-full"
            />
            <input
              type="text"
              id="text-input2"
              name="text-input2"
              value={ans}
              className="mt-2 p-2 border rounded-md w-full"
            />
            <label htmlFor="text-area">Chat</label>

            <textarea
              id="text-area"
              name="text-area"
              rows="4"
              cols="50"
              className="mt-1 p-2 border rounded-md w-full"
            ></textarea>

            {/* <div className="mt-20 space-y-6">
              <div className="flex justify-between">
                <div className="w-1/2 relative">
                  <input
                    type="text"
                    placeholder="&#xf044; Search"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div className="w-1/2 flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 relative">
                  <input
                    type="text"
                    placeholder="&#xf002; Publish new post"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div className="w-1/2 flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
