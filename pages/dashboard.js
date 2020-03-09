import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/globalStyles";

import Header from "../components/generic_components/header/index";
import UserDashboard from "../components/dashboard_page_components/index";
import Footer from "../components/generic_components/footer/index";

const DashBoard = () => (
  <div className="theme">
    <Head>
      <title>Home</title>
    </Head>
    <GlobalStyles />
    <Header />
    <UserDashboard />
    <Footer />

    <style jsx>{`
      .theme {
        background-color: #15202a;
      }
    `}</style>
  </div>
);

export default DashBoard;
