import React from "react";
import "./header.css";

const Header = ({ title, bgImage, style = {} }) => {
  return (
    <section
      id="main-banner-page"
      className="position-relative page-header about-header parallax section-nav-smooth"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 2px",
        marginTop: "0px",
        marginBottom: "60px",
        ...style, 
      }}
    >
      <div className="overlay overlay-dark opacity-6"></div>
      <div className="container m-auto">
        <div className="gradient-bg title-wrap align-items-center">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-white text-center">
              <h2 className="!font-medium">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
