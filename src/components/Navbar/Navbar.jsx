import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <img
          src={logo}
          alt="logo"
          className="navlogo"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="menu">
          <Link
            activeClass="active"
            to={"intro"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="menulist"
            data-aos="slide-down" data-aos-delay="500"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to={"skills"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="menulist"data-aos="fade-slide  " data-aos-delay="500"
          >
            About
          </Link>

          <Link
            activeClass="active"
            to={"works"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="menulist"data-aos="fade-down" data-aos-delay="800"
          >
            Portfolio
          </Link>

          <Link
            activeClass="active"
            to={"clients"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="menulist"data-aos="fade-down" data-aos-delay="800"
          >
            Clients
          </Link>
        </div>
        <button
          className="navbtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contact} alt="" className="ContactImg" data-aos="fade-down" data-aos-delay="800" />
          Contact me
        </button>
        <img
          src={menu}
          alt="menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navmenu"  
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to={"intro"}
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="listitem" data-aos="fade-down" data-aos-delay="800"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to={"skills"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listitem" data-aos="fade-down" data-aos-delay="800"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to={"works"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listitem"data-aos="fade-down" data-aos-delay="800"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>

          <Link
            activeClass="active"
            to={"clients"}
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listitem"data-aos="fade-down" data-aos-delay="800"
            onClick={() => setShowMenu(false)}
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to={"con"}
            spitemy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listitem"data-aos="fade-down" data-aos-delay="800"

            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
