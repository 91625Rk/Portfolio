import React from "react";
import "./Intro.css";     
import hireme from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="introcontent">
          <span className="hello">Hello,</span>
          <span className="introtext">
            I'm<span className="introname"> Rohit</span>
            <br />
            Web Developer
          </span>
          <p className="intropara">
            I am a skilled web designer with experience in<br/> creating visual
            appealing and user friendly websites.
          </p>
          <Link>
            <button className="btn">
              <img src={hireme} alt="hiremebtn" className="hiremebtn" />
              Hire me
            </button>
          </Link>
        </div>
        <div className="intro-img">
          <img alt="" className="profileimg" />
        </div>
      </section>
    </>
  );
};

export default Intro;
