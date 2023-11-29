import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css';
import attend from '../attendance.png';
import mark from '../marks.png';
import rep from '../report.png';

const HomePage = () => {
  const navigate = useNavigate();
  const navattend = () => {
    navigate("/attendance");
  }
  const navmarks = () => {
    navigate("/marks")
  }
  const navreport = () => {
    navigate("/report")
  }
  return (
    <div className="home-page">
      <div className="top-bar">HOME</div>
      <div className="home-text">Welcome faculty,</div>
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