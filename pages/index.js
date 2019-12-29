import React from "react";
import Head from "next/head";

import GlobalStyles from "../reusable_styles/globalStyles";

import Header from "../components/every_page_components/header/header";
import WelcomeToFantasy from "../components/pages_markup_chunks/guest_home/welcome/welcome";
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
    </main>
    <Footer />

    <style jsx>{``}</style>
  </div>
);

export default Home;
