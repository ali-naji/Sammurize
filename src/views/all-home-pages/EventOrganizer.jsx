import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/HeaderFour";
import HeroBannerFour from "../../components/hero-banner/HeroBannerFour";
import About from "../../components/about/About";
import FeatureNine from "../../components/features/FeatureNine";
import Faq from "../../components/faq/Faq";
import PricingThree from "../../components/pricing/PricingThree";
import CallToActionFive from "../../components/call-to-action/CallToActionFive";

const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0" id="home">
      <Helmet>
        <title>AI text summarizer || Sammurize</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End HeaderFour */}

      <HeroBannerFour />
      {/* End Hero Banner Four */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <About />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6>GET STARTED IN MINUTES</h6>
            <h2>
              <span>3 simple & easy step to launch.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>
      {/* /.fancy-feature-nine */}

      {/* 
     =============================================
				Fqa Text Block
		============================================== */}
      <div className="fancy-text-block-six overflow-hidden mt-250 md-mt-200">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-five mb-35">
                <h6>Why choose us</h6>
                <h2>
                  <span>Why you should</span> choose us?
                </h2>
              </div>
              {/* End title */}
              <Faq />
            </div>

            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="illustration-holder d-flex justify-content-end md-mt-50">
                <img src="images/assets/Choose_us.svg" alt="media" />
                <img
                  src="images/shape/113.svg"
                  alt="media"
                  className="shapes shape-one"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
      </div>
      {/* /.why should you choose us */}

      {/* 
     =============================================
				Pricing Section Three
		============================================== */}
      <div
        className="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150"
        href="#pricing"
      >
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-50 md-mb-40">
            <h6>Our Pricing</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <h2>Unbeatable prices, no contracts, simple & easy</h2>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-three">
            <PricingThree />
          </div>
          {/* /.pricing-table-area-three */}
        </div>
        {/* ./container */}
      </div>
      {/* /.pricing-section-three */}

      {/* 

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-five pt-150 pb-150 md-pt-100 md-pb-100">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="container">
          <div className="bottom-footer-content">
            <p>
              Copyright @{new Date().getFullYear()}{" "}
              <a href="https://sammurize.com" target="_blank" rel="noreferrer">
                Sammurize
              </a>{" "}
              inc.
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};

export default EventOrganizer;
