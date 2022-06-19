import React from "react";
// import Head from "next/head";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      {/* <div>{props.children}</div> */}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
