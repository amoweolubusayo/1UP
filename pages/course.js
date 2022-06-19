import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CourseOutline from "../components/CourseOutline";
import MightLike from "../components/MightLike";
import StepperClass from "../components/StepperClass";
import ReactPlayer from "react-player";
import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function courses() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12 text-2xl font-bold">
        <br />
        <h2 className="flex justify-center text-primary">
          Introduction to Solidity
        </h2>
        <Layout pageTitle="CourseOutline">
          <StepperClass />
          <CourseOutline />
          <MightLike />
        </Layout>
        <div className="flex-row p-8 place-items-center"></div>
      </div>
    </div>
  );
}
