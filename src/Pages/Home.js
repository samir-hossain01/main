/** @format */
import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/Banner/Banner";

import Count from "../Components/Countdown/Count";
import About from "../Components/About/About";
import Utility from "../Components/Utility/Utility";

import Roadmap from "../Components/Roadmap/Roadmap";
import Faq from "../Components/Faqs/Faqs";
import Community from "../Components/Community/Community";

function Home() {
  return (
    <Layout>
      <Banner />
      <Count />
      <About />
      <Utility />
      <Roadmap />
      <Faq />
      <Community />
    </Layout>
  );
}

export default Home;
