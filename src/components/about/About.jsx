import React from "react";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <img
          src="images/media/SammurizeMain.svg"
          alt="about"
          className="m-auto"
        />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          {/* <div className="client-info font-rubik">
            Over <span>150,000+ client</span>
          </div> */}
          <div className="title-style-five">
            <h2>
              <span>Best text summarization tool</span> for research.
            </h2>
          </div>
          <p className="font-rubik">
            Reading through hundreds of lines could be exhausting and mentally
            taxing. We understand. Our tool makes your life easier. You can
            start saving time and focus on the most important points today.
          </p>
          {/* <p className="font-rubik">
            We aim to speed up your background 
          </p> */}
          <div className="name font-slab">Ali Naji, founder of Sammurize</div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
