import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
const CourseOutline = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="pr-lg-5">
              <h3 className="text-uppercase text-primary font-weight-large f-14 mb-4 font-bold">
                Learn Solidity
              </h3>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Your first step to being a solidity developer!{" "}
              </h1>
              <p className="text-muted font-light">
                Solidity is an object-oriented, high-level language for
                implementing smart contracts. Smart contracts are programs which
                govern the behaviour of accounts within the Ethereum state.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=hMwdd664_iw&list=PLO5VPQH6OWdULDcret0S0EYQ7YcKzrigz"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default CourseOutline;
