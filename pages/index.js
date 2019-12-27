import React from "react";
import Head from "next/head";

import GlobalStyles from "../reusable_styles/globalStyles";

import Header from "../components/common/header/header";
import HomeWelcome from "../components/pages_markup_chunks/home/welcome/welcome";
import Footer from "../components/common/footer/footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <GlobalStyles />
    <div className="wrapper">
      <Header />
      <main>
        <HomeWelcome />
      </main>
      <Footer />
    </div>

    <style jsx>{`
      .wrapper {
        background: linear-gradient(
          180deg,
          rgba(102, 46, 255, 0.75) 2.11%,
          #36205d 86.74%
        );
      }
    `}</style>
  </div>
);

export default Home;
