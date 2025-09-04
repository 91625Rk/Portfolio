import "./Contact.css";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import walmart from "../../assets/walmart.png";
import facebookicon from "../../assets/facebook-icon.png";
import twittericon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramicon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tb53xpx", "template_qdrfizr", form.current, {
        publicKey: "7gOIbE_KVrnd875mjCu4e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <>
        <section className="contentpage">
          <div id="clients">
            <h1 className="heading" data-aos="zoom-in" data-aos-delay="550">My Clients</h1>
            <p className="desc" data-aos="fade-up" data-aos-delay="570">
              I have had the opportunity to work a diverse group of companies.
              Some of the notable companies I have worked with includes
            </p>
            <div className="clientimgs">
              <img src={walmart} alt="clients" className="clientimg" data-aos="zoom-in" data-aos-delay="550" />
              <img src={adobe} alt="clients" className="clientimg" data-aos="zoom-in" data-aos-delay="550" />
              <img src={microsoft} alt="clients" className="clientimg" data-aos="zoom-in" data-aos-delay="550" />
              <img src={facebook} alt="clients" className="clientimg" data-aos="zoom-in" data-aos-delay="550" />
            </div>
          </div>
          <div id="contact" >
            <h1 className="contactpagetitle" data-aos="fade-up" data-aos-delay="550">Contact Me</h1>
            <span className="contactdesc" data-aos="fade-up" data-aos-delay="650">
              Please fill out the form below to discuss any work opportunities
            </span>
          </div>
          <form
            action=""
            className="contactform"
            data-aos="fade-up" data-aos-delay="500"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="name"
              data-aos="fade-up" data-aos-delay="520"
              placeholder="Your name"
              name="from_name"
            />
            <input
              type="email"
              className="email"
              data-aos="fade-up" data-aos-delay="540"
              placeholder="Your email"
              name="from_email"
            />
            <textarea
              name="message"
              id=""
              rows={5}
              className="msg"
              data-aos="fade-up" data-aos-delay="560"
              placeholder="Your message"
            ></textarea>
            <button   type = "submit" className="submitbtn" data-aos="fade-up" data-aos-delay="500" value="send">
              {" "}
              Submit
            </button>

            <div className="links">
              <a
                href="https://www.facebook.com/singh.rohit.628812/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookicon} alt="" className="link" data-aos="zoom-in" data-aos-delay="580"/>
              </a>
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twittericon} alt="" className="link" data-aos="zoom-in" data-aos-delay="610" />
              </a>
              <a
                href="https://www.youtube.com/@lofi_world_4.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="" className="link" data-aos="zoom-in" data-aos-delay="620"/>
              </a>
              <a
                href="https://www.instagram.com/rohit.____2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramicon} alt="" className="link" data-aos="zoom-in" data-aos-delay="630" />
              </a>
            </div>
          </form>
        </section>
      </>
    </div>
  );
};

export default Contact;
