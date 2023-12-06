import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import attend from "../attendance.png";
import mark from "../marks.png";
import rep from "../report.png";
import logout from "../exit.png";
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
    navigate("/attendance");
  };
  const navmarks = () => {
    navigate("/marks");
  };
  const navreport = () => {
    navigate("/report");
  };
  const navlogin = () => {
    navigate("/login");
  };
  return (
    <div className="home-page">
      {/* checklogin() confirm login here*/}
      <div className="top-bar">HOME</div>
      <div className="home-heading">
        <div className="home-text">CSE DEPARTMENT</div>
        <button onClick={navlogin} className="logout-button">
          <img className="logout-logo" src={logout} alt="logout" />
        </button>
      </div>
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
      </div>
    </div>
  );
};

export default HomePage;
