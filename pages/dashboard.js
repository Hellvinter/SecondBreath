import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/globalStyles";

import Header from "../components/common/header/index";
import UserDashboard from "../components/pages_chunks/dashboard/index";
import Footer from "../components/common/footer/index";

const DashBoard = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <GlobalStyles />
    <Header />
    <UserDashboard />
    <Footer />
  </div>
);

export default DashBoard;
