import React from "react";
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src="https://media.istockphoto.com/photos/illustration-of-business-team-office-working-happy-multicultural-picture-id1316482152?b=1&k=20&m=1316482152&s=170667a&w=0&h=2sN3XUoHbsVOmc3N6gVzgpyiHcX_cCbZaAy0EK1lIpI="
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-bold font-bold mb-3 pt-3 text-2xl">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15 text-xl">{feature.desc}</p>
                <a href={feature.link} className="f-16 btn btn-primary">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-bold font-bold mb-3 pt-3 text-2xl">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15 text-xl">{feature.desc}</p>
                <a href={feature.link} className="f-16 btn btn-primary">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src="https://media.istockphoto.com/photos/illustration-of-home-video-call-online-work-conference-virtual-class-picture-id1316482160?b=1&k=20&m=1316482160&s=170667a&w=0&h=eb1LVe-07DTG6DWFCo7yW8N3_wnZIoGoRwex-FV5Ee8="
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "./images/45.png",
      title: "Transform your life through decentralized education",
      desc: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
      link: "/",
    },
    {
      id: 2,
      img: "./images/Group Members.png",
      title: "Unlimited access to courses",
      desc: "Get unlimited access to 6,000+ of Primero’s top courses for your team. Learn and improve skills across business, tech, design, and more.",
      link: "/",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="relative bg-gray-0 pt-16 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="font-semibold tracking-wider text-600 uppercase">
                Features
              </h2>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                As a Student, on Primero you can buy a course as an NFT, finish
                the course at your own pace, and get an NFT certificate
                afterwards! You can also list and sell your course as an NFT
                with a first timer purchase advantage!
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                As an Instructor, Primero offers you the first web3 platform to
                upload your courses, monitor your student progress, and earn new
                revenue streams in crypto for the content you created.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="pb-16 bg-gradient-to-r lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src="https://media.istockphoto.com/photos/illustration-of-business-team-office-working-happy-multicultural-picture-id1316482152?b=1&k=20&m=1316482152&s=170667a&w=0&h=2sN3XUoHbsVOmc3N6gVzgpyiHcX_cCbZaAy0EK1lIpI="
                    alt=""
                  />
                  <div
                    aria-hidden="true"
                    className="inset-0 from-teal-500 to-cyan-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <div>
                  <p className="mt-6 text-2xl font-medium text-black">
                    Transform your life through decentralized education
                  </p>
                  <p className="text-base text-black">
                    Learners around the world are launching new careers,
                    advancing in their fields, and enriching their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Row>
      <br />
      <FeatureBox features={features} />
    </Container>
  );
};
export default Feature;
