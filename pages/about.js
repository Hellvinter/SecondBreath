import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/globalStyles";
import Header from "../components/common/header/index";
import AboutProject from "../components/pages_markup_chunks/about_project/about_project";
import Footer from "../components/common/footer/index";

const About = () => (
  <div>
    <Head>
      <title>About project</title>
    </Head>
    <GlobalStyles />
    <Header />
    <AboutProject />
    <Footer />

    <style jsx>{``}</style>
  </div>
);

export default About;
