import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import awsconfig from "./aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsconfig);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>
        <title>Sammurize - Slash your research time with AI</title>
        <meta property="og:site_name" content="sammurize" />
        <meta property="og:url" content="https://sammurize.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sammurize: Your Research accelerated using AI"
        />
        <meta
          name="keywords"
          content="AI, summarize, research, study, paper, pdf, fullpage, summary, software, Artificial Intelligence, Natural Language, sass, software company"
        />
        <meta
          name="description"
          content="Sammurize is an AI text summarization tool and software to accelerate your research. Browse through thousands of papers now with AI."
        />
        <meta name="description" content="Automation software" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
