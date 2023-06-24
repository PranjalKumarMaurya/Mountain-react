import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Header() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  const handlescroll = () => {
    if (window.scrollY > 300) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className={`${scrolled ? "sticky-header" : ""}`}>
      <div className={`header-container `}>
        <img src={Logo} alt="" />
        <div className="header-links" ref={navRef}>
          <span className={`link ${scrolled ? "sticky" : ""}`}>
            01. History
          </span>
          <span className={`link ${scrolled ? "sticky" : ""}`}>02. Team</span>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
