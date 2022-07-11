import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: " State-of-the-art AI",
    desc: ` We use the most advanced NLP text summarization algorithms that can understand the text and give you a brief of the whole text. You can customize how brief the summarized text will be.`,
    expand: "a",
  },
  {
    title: "Manage your research easily",
    desc: ` Our intuitive and easy-to-use UI can be an all-in-one platform where you can work on your research.`,
    expand: "b",
  },
  {
    title: "Save your reading time by 10x",
    desc: ` No more wasted time going through the details. Just solid pointers that put you into perspective`,
    expand: "c",
  },
];

const Faq = () => {
  return (
    <div className="accordion-style-two pr-5">
      <div className="faq-wrraper">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
