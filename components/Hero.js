import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <div className="relative bg-gray-100">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-photo/studio-portrait-collage-diverse-people_53876-137629.jpg?w=996"
                alt=""
              />
              <div aria-hidden="true" className="inset-0" />
            </div>

            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="mt-2 text-black text-xl font-extrabold tracking-tight sm:text-4xl">
                  WELCOME TO PRIMERO!
                </h2>
                <p className="mt-3 text-base font-semibold uppercase tracking-wider text-black-900">
                  THE WORLD FIRST DECENTRALIZED WEB3 EDUCATIONAL PLATFORM
                </p>
                <p className="mt-3 text-lg text-black-300">
                  Learn New Skills by Buying and Selling Courses as NFTs{" "}
                </p>
                <p className="mt-3 text-lg text-black-300">
                  Welcome to Primero! Primero is the first decentralized web3
                  platform and marketplace for online learning and teaching that
                  revolutionizes access to courses and skills in developing
                  countries in Africa and Latin America.
                </p>
                <p className="mt-3 text-lg text-black-300">
                  Join Primero to create the first web3 learning and teaching
                  ecosystem that will enable future generations to prosper and
                  develop in Africa and Latin America. Together, WE CAN!
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow hover:bg-gray-50"
                    >
                      Buy your first decentralized course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
