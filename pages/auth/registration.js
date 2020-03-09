import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/generic_components/header/index";
import RegistrationForm from "../../components/generic_components/auth/registration";
import Footer from "../../components/generic_components/footer/index";

const Registration = () => (
  <div className="theme">
    <Head>
      <title>Create account</title>
    </Head>
    <GlobalStyles />
    <Header />
    <RegistrationForm />
    <Footer />
    <style jsx>{`
      .theme {
        background-color: #15202a;
      }
    `}</style>
  </div>
);

export default Registration;
