import React from "react";
import "./Footer.css";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to={"/"}>
        <div className="footer-logo">
          <h2>
            Furniture<span className="danger">Finesse</span>
          </h2>
        </div>
      </Link>
      {/* <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div> */}
      <ul className="footer-links">
        <li>Company</li>
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
