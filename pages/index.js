import { useEffect, useState, React } from "react";
import Header from "../components/Header";
import FeaturedCourses from "../components/FeaturedCourses";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}
