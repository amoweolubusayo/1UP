import React from "react";
import Header from "./Header";
import FeaturedCourses from "./FeaturedCourses";
import Hero from "./Hero";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
