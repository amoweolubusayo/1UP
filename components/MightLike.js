import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
const MightLike = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <br />
          <p className="flex justify-center">You might also like</p>
          <br />
          <br />
          <br />
          <Col lg={5}>
            <div className="pr-lg-5">
              <h3 className="text-uppercase text-primary font-weight-large f-14 mb-4 font-bold">
                Liquidity Pool
              </h3>
              <h1 className="mb-4 font-thin line-height-1_4">
                Your first step to being an expert at liquiduity!{" "}
              </h1>
              <p className="text-muted font-thin"></p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=dVJzcFDo498&list=PLHx4UicbtUoYvCvRouZ4XbaDpE7cbCCqo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default MightLike;
