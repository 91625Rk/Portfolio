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
            <h1 className="heading">My Clients</h1>
            <p className="desc">
              I have had the opportunity to work a diverse group of companies.
              Some of the notable companies I have worked with includes
            </p>
            <div className="clientimgs">
              <img src={walmart} alt="clients" className="clientimg" />
              <img src={adobe} alt="clients" className="clientimg" />
              <img src={microsoft} alt="clients" className="clientimg" />
              <img src={facebook} alt="clients" className="clientimg" />
            </div>
          </div>
          <div id="contact">
            <h1 className="contactpagetitle">Contact Me</h1>
            <span className="contactdesc">
              Please fill out the form below to discuss any work opportunities
            </span>
          </div>
          <form
            action=""
            className="contactform"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="name"
              placeholder="Your name"
              name="from_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your email"
              name="from_email"
            />
            <textarea
              name="message"
              id=""
              rows={5}
              className="msg"
              placeholder="Your message"
            ></textarea>
            <button   type = "submit" className="submitbtn" value="send">
              {" "}
              Submit
            </button>

            <div className="links">
              <a
                href="https://www.facebook.com/singh.rohit.628812/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookicon} alt="" className="link" />
              </a>
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twittericon} alt="" className="link" />
              </a>
              <a
                href="https://www.youtube.com/@lofi_world_4.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="" className="link" />
              </a>
              <a
                href="https://www.instagram.com/rohit.____2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramicon} alt="" className="link" />
              </a>
            </div>
          </form>
        </section>
      </>
    </div>
  );
};

export default Contact;
