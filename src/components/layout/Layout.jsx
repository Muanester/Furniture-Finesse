import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TopNav from "../topNav/TopNav";

function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
