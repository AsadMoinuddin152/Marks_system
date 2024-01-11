import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import attend from "../attendance.png";
import mark from "../marks.png";
import rep from "../report.png";
import down from "../download.png"
import logout from "../exit.png";

import Attendance from "./Attendance";
import Marks from "./Marks";
import Report from "./Report";
import Download from "./Download";
// import { isLoggedIn } from './Login.js';

const HomePage = () => {
  // console.log(isLoggedIn)

  const navigate = useNavigate();
  /*const checklogin = () => {
    if (isLoggedIn == false) {
      alert("Please login again");
      navigate("/login");
    }
  }
  ^for confirming login */
  const navattend = () => {
    document.getElementById("show-attend").style.display = "block";
    document.getElementById("show-marks").style.display = "none";
    document.getElementById("show-report").style.display = "none";
    document.getElementById("show-download").style.display = "none";
  };
  const navmarks = () => {
    document.getElementById("show-attend").style.display = "none";
    document.getElementById("show-marks").style.display = "block";
    document.getElementById("show-report").style.display = "none";
    document.getElementById("show-download").style.display = "none";
  };
  const navreport = () => {
    document.getElementById("show-attend").style.display = "none";
    document.getElementById("show-marks").style.display = "none";
    document.getElementById("show-report").style.display = "block";
    document.getElementById("show-download").style.display = "none";
  };
  const navdownload = () => {
    document.getElementById("show-attend").style.display = "none";
    document.getElementById("show-marks").style.display = "none";
    document.getElementById("show-report").style.display = "none";
    document.getElementById("show-download").style.display = "block";
  };
  const navlogin = () => {
    navigate("/login");
  };
  return (
    <div className="home-page">
      {/* checklogin() confirm login here*/}
      <div className="home-options">
          <button onClick={navattend} className="home-buttons">
            <img className="option-logo" src={attend} alt="" />
            Attendance
          </button>
          <button onClick={navmarks} className="home-buttons">
            <img className="option-logo" src={mark} alt="" />
            Marks
          </button>
          <button onClick={navreport} className="home-buttons">
            <img className="option-logo" src={rep} alt="" />
            Reports Generation
          </button>
          <button onClick={navdownload} className="home-buttons">
            <img className="option-logo" src={down} alt="" />
            Download Data
          </button>
      </div>
      <div className="home-box">
        <div className="top-bar">
          <div className="home-text">CSE DEPARTMENT:</div>
          <button onClick={navlogin} className="logout-button">
                <img className="logout-logo" src={logout} alt="logout" />
          </button>
        </div>
        <div className="content">
          <div className="pages" id="show-attend"><Attendance /></div>
          <div className="pages" id="show-marks"><Marks /></div>
          <div className="pages" id="show-report"><Report /></div>
          <div className="pages" id="show-download"><Download /></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
