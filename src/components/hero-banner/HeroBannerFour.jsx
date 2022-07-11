import React from "react";
import { Link } from "react-scroll";

import FeaturesEight from "../features/FeaturesEight";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      <img
        src="images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img
        src="images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <img
        src="images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <img
                src="images/assets/ils_14.svg"
                alt="shape"
                className="illustration"
              />
              <img
                src="images/assets/ils_14.1.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils_14.2.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <img
                src="images/assets/ils_14.3.svg"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                <span>Speed Up your research</span> with AI.
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                We know it's exhausting, we've been there. We are here to help
                you create quick summaries of your researched content
              </p>
              <Link
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                activeClass="active"
                to="waitlist"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                {" "}
                Join the Waitlist
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100" id="features">
        <div className="container">
          <div className="bg-wrapper">
            <FeaturesEight />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
