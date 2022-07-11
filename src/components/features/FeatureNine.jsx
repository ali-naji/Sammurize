import React from "react";

const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Join Our Platform",
    subTitle: `  It only takes a minute. Set up is smooth and simple`,
  },
  {
    icon: "ils_16",
    meta: "Create new research",
    subTitle: `Create a new research and start gathering documents as pdf files or public URL article links`,
  },
  {
    icon: "ils_07",
    meta: "Start summarizing text",
    subTitle: `Get detailed keywords and summarize main points for each document`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <img src={`images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
