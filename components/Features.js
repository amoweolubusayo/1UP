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
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <p className="text-primary font-bold text-2xl">Features</p>
              </h3>
              <br />
              <p className="text-muted text-lg">
                As a Student, on Primero you can buy a course as an NFT, finish
                the course at your own pace, and get an NFT certificate
                afterwards! You can also list and sell your course as an NFT
                with a first timer purchase advantage!{" "}
              </p>
              <br />
              <p className="text-muted text-lg">
                {" "}
                As an Instructor, Primero offers you the first web3 platform to
                upload your courses, monitor your student progress, and earn new
                revenue streams in crypto for the content you created.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
