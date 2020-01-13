import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/globalStyles";

import Header from "../components/every_page_components/header/index";
import WelcomeToFantasy from "../components/pages_markup_chunks/guest_home/welcome";
import OurFeatures from "../components/pages_markup_chunks/guest_home/features";
import Footer from "../components/every_page_components/footer/footer";

const Home = () => (
  <div>
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

    <style jsx>{``}</style>
  </div>
);

export default Home;
