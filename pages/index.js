import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/globalStyles";

import Header from "../components/generic_components/header/index";
import WelcomeToFantasy from "../components/home_page_components/welcome";
import OurFeatures from "../components/home_page_components/features";
import Footer from "../components/generic_components/footer/index";

const Home = () => (
  <div className="theme">
    <Head>
      <title>Home</title>
    </Head>
    <GlobalStyles />
    <Header />
    <main>
      <WelcomeToFantasy />
      <OurFeatures />
    </main>
    <Footer />

    <style jsx>{`
      .theme {
        background-color: #15202a;
      }
    `}</style>
  </div>
);
// Color theme.

// 2b2b2b
// 15202a
export default Home;
