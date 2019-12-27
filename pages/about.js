import React from "react";
import Head from "next/head";

import GlobalStyles from "../reusable_styles/globalStyles";
import Header from "../components/common/header/header";
import AboutProject from "../components/pages_markup_chunks/about_project/about_project";
import Footer from "../components/common/footer/footer";

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
