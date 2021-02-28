import React from "react";
import T from "../images/SVG/T.svg";
import H from "../images/SVG/H.svg";
import I from "../images/SVG/I.svg";
import R from "../images/SVG/R.svg";
import D from "../images/SVG/D.svg";
import Y from "../images/SVG/Y.svg";
import E from "../images/SVG/E.svg";
import A from "../images/SVG/A.svg";
import X from "../images/SVG/X.svg";
import O from "../images/SVG/O.svg";
import P from "../images/SVG/P.svg";
import Enter from "../images/Home/Enter.svg";
import About from "../images/Home/About.svg";

import { Row, Col } from "antd";

const Home = () => {
  return (
    <div style={{ paddingLeft: "2rem" }}>
      <Row>
        <Col span={24}>
          <img src={T} alt="T" height={340} />
          <img src={H} alt="H" height={340} />
          <img src={I} alt="I" height={340} />
          <img src={R} alt="R" height={340} />
          <img src={D} alt="D" height={340} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <img src={Y} alt="Y" height={340} />
          <img src={E} alt="E" height={340} />
          <img src={A} alt="A" height={340} />
          <img src={R} alt="R" height={340} />
          <a href="/artist-list">
            <img
              style={{ paddingLeft: "7rem", paddingBottom: "7rem" }}
              src={Enter}
              alt="Enter"
              height={120}
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <a href="/about">
            <img
              style={{ paddingLeft: "9rem", paddingBottom: "8rem" }}
              src={About}
              alt="About"
              height={80}
            />
          </a>
          <img style={{ paddingLeft: "6rem" }} src={E} alt="E" height={360} />
          <img src={X} alt="X" height={340} />
          <img src={P} alt="P" height={340} />
          <img src={O} alt="O" height={340} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
