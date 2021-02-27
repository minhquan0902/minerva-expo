import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navBar.css";
import { IconContext } from "react-icons";
import linesAndDots from "../images/Lines_and_dots.svg";
import { Divider } from "antd";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div
            style={{
              color: "white",
              align: "right",
              fontFamily: "Cy",
              fontSize: "8rem",
              marginLeft: "-7rem",
              marginTop: "-25rem",
            }}
          >
            a
          </div>
          <div
            style={{
              color: "white",

              fontFamily: "Cy",
              fontSize: "14rem",
              marginTop: "-16rem",
              marginRight: "-20rem",
            }}
          >
            bout
          </div>

          <div className="lines-and-dot">
            <div style={{ display: "flex" }}>
              <p className="date">11/3</p>
              <Divider color="white" />
              <p className="date-2">19/3</p>
            </div>
            <img src={linesAndDots} alt="lines and dots" height={780} />
          </div>
        </div>

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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
