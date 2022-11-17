import { useState, useEffect } from "react";
import { FixedNumber } from "ethers";
import Link from "next/link";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
// import Alert from "../components/Alert";
import Header from "../components/Header";
import connectToContract from "../utils/primeroContract";
// import getRandomImage from "../utils/getRandomImage";

export default function CreateCourse() {
  const account = useAccount();

  const [courseName, setCourseName] = useState("");
  const [instructorName, setinstructorName] = useState("");
  const [coursePrice, setcoursePrice] = useState("");
  const [courseDescription, setcourseDescription] = useState("");
  const [studentNumber, setStudentNumber] = useState("");

  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [courseID, setcourseID] = useState(null);

  // console.log("Instructor Address", account.address.toLowerCase());

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      coursename: courseName,
      sellername: instructorName,
      price: coursePrice,
      description: courseDescription,
      amount: studentNumber,
    };

    try {
      // const response = await fetch("/api/store-event-data", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });
      // if (response.status !== 200) {
      //   alert("Oops! Something went wrong. Please refresh and try again.");
      // } else {
      console.log("Form successfully submitted!");
      // let responseJSON = await response.json();
      await createCourse();
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  }
  const createCourse = async () => {
    try {
      const primeroContract = connectToContract();
      console.log(primeroContract);
      console.log("Instructor Address", account);
      if (primeroContract) {
        let txn = await primeroContract.listCourse(
          studentNumber,
          coursePrice,
          instructorName,
          courseName,
          courseDescription,
          0x00,
          { value: FixedNumber.fromValue(10,2)}
        );

        console.log(await txn);
        setLoading(true);
        console.log("Minting...", txn.hash);
        await txn.wait();
        console.log("Minted -- ", txn.hash);
        setSuccess(true);
        setLoading(false);
        setMessage("Your course has been submitted successfully.");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage(`There was an error creating your event: ${error.message}`);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {});

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <section className="relative py-12">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-4">
          Submit a Course
        </h1>
        {account && (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventname"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Name
                  <p className="mt-2 text-sm text-gray-400">
                    what you will like to be addressed as
                  </p>
                </label>

                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="instructor-name"
                    name="instructor-name"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={instructorName}
                    onChange={(e) => setinstructorName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventname"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Course name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="course-name"
                    name="course-name"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventname"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Course price
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="course-price"
                    name="course-price"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={coursePrice}
                    onChange={(e) => setcoursePrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Course description
                  <p className="mt-2 text-sm text-gray-400">
                    Let people know what your course is about!
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={10}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={courseDescription}
                    onChange={(e) => setcourseDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="max-capacity"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Max capacity of students
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Limit the number of students for your course (optional).
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="number"
                    name="max-capacity"
                    id="max-capacity"
                    min="1"
                    placeholder="100"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                <Link href="/">
                  <a className="bg-white py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </a>
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        )}
        {!account && (
          <section className="flex flex-col items-start py-8">
            <p className="mb-4">Please connect your wallet to create events.</p>
            <ConnectButton />
          </section>
        )}
      </section>
    </div>
  );
}
