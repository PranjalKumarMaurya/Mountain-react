import React from "react";
import "./Footer.scss";
import Logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="text">
          <span>LOSANGLES</span>
          <span>MOUNTAINS</span>
        </div>
      </div>
      <div className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
    </div>
  );
}
