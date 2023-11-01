import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top_nav">
      <div>
        <p>Your Number 1 Online Shop!</p>
      </div>
      <div>
        <Link to={"/login"}>Join Our Community</Link>
      </div>
    </div>
  );
};

export default TopNav;
