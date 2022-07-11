import React from "react";

const FeatureContent = [
  {
    icon: "61",
    meta: "Start a research",
    subTitle: `Make a collection of documents for each research`,
  },
  {
    icon: "199",
    meta: "Extract main keywords",
    subTitle: `Using text analytics, retrieve most discussed terms in each document`,
  },
  {
    icon: "65",
    meta: "Auto summarize",
    subTitle: `Using NLP, summarize whole papers and articles`,
  },
];

const FeaturesEight = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title font-rubik">{val.meta}</div>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEight;
