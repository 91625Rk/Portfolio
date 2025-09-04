import { useEffect } from "react";
import "./Intro.css";     
import hireme from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {

  return (
    <>
      <section className="intro">
        <div className="introcontent">
          <span className="hello"  data-aos="fade-up" data-aos-delay="50">Hello,</span>
          <span className="introtext" data-aos="fade-up" data-aos-delay="120">
            I'm<span className="introname"> Rohit</span>
            <br />
            Web Developer
          </span>
          <p className="intropara" data-aos="fade-up" data-aos-delay="200">
            I am a skilled web designer with experience in<br/> creating visual
            appealing and user friendly websites.
          </p>
          <Link>
            <button className="btn" data-aos="fade-up" data-aos-delay="300">
              <img src={hireme} alt="hiremebtn" className="hiremebtn" />
              Hire me
            </button>
          </Link>
        </div>
        <div className="intro-img" data-aos="zoom-in" data-aos-delay="400">
          <img alt="" className="profileimg" />
        </div>
      </section>
    </>
  );
};

export default Intro;
