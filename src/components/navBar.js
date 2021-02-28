import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navBar.css";

import thanhNgang from "../images/thanh_ngang.svg";
import about from "../images/About/About/Asset 9.png";
import the from "../images/About/About/Asset 10.png";
import expo from "../images/About/About/Asset 7.png";
import Enter from "../images/About/About/Asset 8.png";
import thanhDoc from "../images/About/About/Asset 11.png";

import { Divider, Col, Row } from "antd";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Row style={{ backgroundColor: "black" }}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars
            style={{ marginTop: "3rem" }}
            onClick={showSidebar}
            color="white"
            className="responsive-icon"
          />
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "black",
            alignContent: "center",
          }}
          className="date"
        >
          <p
            style={{
              color: "white",
              fontFamily: "Cy",

              fontSize: "5rem",
              marginTop: "-9rem",
              color: "red",
            }}
          >
            11/3
          </p>
          <img
            src={thanhNgang}
            alt="ngang"
            width={580}
            style={{ padding: "2rem", marginTop: "-13rem" }}
            className="thanh-ngang"
          />
          <p
            style={{
              color: "white",
              fontFamily: "Cy",

              fontSize: "5rem",
              marginTop: "-9rem",
              color: "red",
              marginRight: "4rem",

              backgroundColor: "black",
            }}
          >
            18/3
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "-5rem",
          }}
        >
          <img
            style={{
              paddingLeft: "2rem",
              marginTop: "-4rem",
              marginBottom: "-40rem",
              paddingBottom: "-19rem",
            }}
            src={about}
            alt="about"
            height={300}
          ></img>

          <img
            style={{ marginTop: "-9rem", marginLeft: "5rem" }}
            src={thanhDoc}
            alt="thanh-doc"
            height={850}
          />
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "white",
                  fontFamily: "cy",
                  textAlign: "center",
                  fontSize: "3rem",
                  marginLeft: "-8rem",

                  marginTop: "-3rem",
                }}
              >
                MINERVA <br /> ACADEMY
              </p>
              <p
                style={{
                  fontFamily: "Cy",
                  color: "white",
                  textAlign: "left",
                  align: "left",
                  marginTop: "2rem",
                  marginRight: "7rem",
                  marginLeft: "8rem",
                }}
              >
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
          <p
            style={{
              fontFamily: "Cy",
              color: "white",
              textAlign: "left",
              align: "left",
              marginRight: "2rem",
              marginLeft: "-2rem",
              paddingLeft: "-3rem",
              marginTop: "10rem",
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p
            style={{
              fontFamily: "Cy",
              color: "white",
              display: "flex",
              flexDirection: "row",
              fontSize: "2rem",
              marginRight: "0.5rem",
              marginLeft: "2rem",
            }}
          >
            3rd
          </p>
          <p
            style={{
              fontFamily: "Cy",
              color: "white",
              display: "flex",
              flexDirection: "row",
              fontSize: "2rem",
              marginRight: "6rem",
            }}
          >
            year
          </p>
          <p
            style={{
              fontFamily: "Cy",
              color: "white",
              fontSize: "3rem",
              marginTop: "5rem",
              marginRight: "6rem",
              marginLeft: "-14rem",
            }}
          >
            <strong>FINE</strong>
          </p>
          <p
            style={{
              fontFamily: "Cy",
              color: "white",
              fontSize: "3rem",
              marginTop: "5rem",
              marginLeft: "-5.5rem",
              marginRight: "4rem",
            }}
          >
            <strong>ART</strong>
          </p>
        </div>
        <img
          src={expo}
          style={{
            marginTop: "-60rem",
            marginLeft: "-20rem",
            paddingTop: "-30rem",
            paddingBottom: "12rem",
          }}
          alt="expo"
          height={1250}
        ></img>
        <img
          src={the}
          alt="the"
          height={300}
          style={{
            marginTop: "-30rem",
            marginBottom: "40rem",
            paddingBottom: "10rem",
            marginLeft: "-38rem",
          }}
        ></img>
        <a href="/artist-list">
          <img
            src={Enter}
            alt="enter"
            height={200}
            style={{
              paddingBottom: "30rem",
              marginLeft: "-30rem",
              paddingTop: "-3rem",
            }}
          />
        </a>
      </Row>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="close-icon">
              <AiIcons.AiOutlineClose color="black" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
