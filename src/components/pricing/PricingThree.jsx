import React from "react";
import { Link } from "react-scroll";

const PricingContent = [
  // {
  //   title: "Free Event",
  //   price: "0",
  //   priceMeta: "per user/month",
  //   packageName: "pc1",
  //   skewClass: "skew-right",
  //   priceList: [
  //     {
  //       list: "60-day chat history",
  //       listClass: "",
  //     },
  //     {
  //       list: "Basic widget customization",
  //       listClass: "",
  //     },
  //     {
  //       list: "Ticketing system",
  //       listClass: "disable",
  //     },
  //     {
  //       list: "Data security",
  //       listClass: "disable",
  //     },
  //   ],
  //   animatinDelay: "0",
  // },
  {
    title: "Regular",
    price: "8.99",
    priceMeta: "per month",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        list: "60 article/paper summaries",
        listClass: "",
      },
      {
        list: "3 fully-featured researches",
        listClass: "",
      },
      {
        list: "Maximum 2,000 words per article/paper",
        listClass: "",
      },
      // {
      //   list: "Data security",
      //   listClass: "disable",
      // },
    ],
    animatinDelay: "100",
  },
  {
    title: "Premium",
    price: "18.99",
    priceMeta: "per month",
    packageName: "pc3",
    skewClass: "skew-right",
    priceList: [
      {
        list: "Unlimited article/paper summaries",
        listClass: "",
      },
      {
        list: "Unlimited fully-featured researches",
        listClass: "",
      },
      {
        list: "Maximum 5,000 words per article/paper",
        listClass: "",
      },
      // {
      //   list: "Data security",
      //   listClass: "",
      // },
    ],
    animatinDelay: "200",
  },
];

const PricingThree = () => {
  return (
    <div className="row justify-content-center" id="pricing">
      {PricingContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`pr-table-wrapper ${item.skewClass}`}>
            <div className={`pack-name font-slab ${item.packageName}`}>
              <span>{item.title}</span>
            </div>
            <div className="price font-slab">${item.price}</div>
            <p className="user-condition">{item.priceMeta}</p>
            <img src="images/shape/114.svg" alt="shape" className="line" />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={val.listClass} key={i}>
                  {val.list}
                </li>
              ))}
            </ul>
            <Link
              className="subscribe-btn font-rubik"
              activeClass="active"
              to="waitlist"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingThree;
