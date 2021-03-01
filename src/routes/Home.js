/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Home.css";
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

const Home = () => {
  return (
    <div>
      <div className="w-layout-grid grid-4">
        <div>
          <img src={T} alt="T" className="image-3" />
        </div>
        <div>
          <img src={H} alt="H" />
        </div>
        <div>
          <img src={I} alt="I" />
        </div>
        <div>
          <img src={R} alt="R" />
        </div>
        <div>
          <img src={D} alt="D" />
        </div>

        <div>
          <img src={Y} alt="Y" />
        </div>
        <div>
          <img src={E} alt="E" />
        </div>
        <div>
          <img src={A} alt="A" />
        </div>
        <div>
          <img src={R} alt="R" />
        </div>
        <a href="/artist-list" class="div-block-8 w-inline-block"></a>
        <a href="/about" class="div-block-9 w-inline-block"></a>
        <div>
          <img src={E} alt="E" />
        </div>
        <div>
          <img src={X} alt="X" />
        </div>
        <div>
          <img src={P} alt="P" />
        </div>
        <div>
          <img src={O} alt="O" />
        </div>
      </div>
    </div>
  );
};

export default Home;
