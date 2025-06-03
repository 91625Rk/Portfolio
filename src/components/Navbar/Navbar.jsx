import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";
import menu from '../../assets/menu.png'
import { useState } from "react";
const Navbar = () => {
const[showMenu,setShowMenu]  = useState(false)
  return (
    <>
      <nav className="navbar">
        <img
          src={logo}
          alt="logo" className="navlogo"
        />
        <div className="menu">
          <Link activeClass="active" to = {"intro"} spy = {true} offset={-50} smooth={true} duration={500} className="menulist">Home</Link>
          <Link activeClass="active" to = {"skills"} spy = {true} offset={-50} smooth={true} duration={500} className="menulist">About</Link>

          <Link activeClass="active" to = {"works"} spy = {true} offset={-50} smooth={true} duration={500} className="menulist">Portfolio</Link>

          <Link activeClass="active" to = {"clients"}spy = {true} offset={-50} smooth={true} duration={500} className="menulist">Clients</Link>
        </div>
        <button className="navbtn" onClick={()=>{
            document.getElementById("contact").scrollIntoView({behavior:'smooth'})}}>
          <img src={contact} alt="" className="ContactImg" />
          Contact me
        </button>
        <img
          src={menu}
          alt="menu" className="mobMenu"
          onClick={()=>setShowMenu(!showMenu)} 
        />
        <div className="navmenu" style={{display:showMenu ?'flex':'none'}}>
          <Link activeClass="active" to = {"intro"} spy = {true} offset={-100} smooth={true} duration={500} className="listitem" onClick={()=>setShowMenu(false)
          }>Home</Link>
          <Link activeClass="active" to = {"skills"} spy = {true} offset={-50} smooth={true} duration={500} className="listitem" onClick={()=>setShowMenu(false)
        }>About</Link>

          <Link activeClass="active" to = {"works"} spy = {true} offset={-50} smooth={true} duration={500} className="listitem" onClick={()=>setShowMenu(false)
          }>Portfolio</Link>

          <Link activeClass="active" to = {"clients"}spy = {true} offset={-50} smooth={true} duration={500} className="listitem" onClick={()=>setShowMenu(false)
          }>Clients</Link>
          <Link activeClass="active" to = {"con"}spitemy = {true} offset={-50} smooth={true} duration={500} className="listitem" onClick={()=>setShowMenu(false)
          }>Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
