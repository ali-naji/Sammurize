import React from "react";
import FormEvent from "../../components/form/FormEvent";

const CallToActionFive = () => {
  return (
    <>
      <div className="title-style-five text-center" id="waitlist">
        <h2>
          <span>Join waitlist & get notified</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-9 m-auto">
          <p className="font-rubik sub-heading">
            Our summarization tool is made for you
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
          <FormEvent />
          {/* <p className="info-text">
            Already a member? <Link to="login">Sign in.</Link>
          </p> */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default CallToActionFive;
