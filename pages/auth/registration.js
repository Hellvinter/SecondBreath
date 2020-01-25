import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/common/header/index";
import RegistrationForm from "../../components/common/auth/registration";
import Footer from "../../components/common/footer/index";

const Registration = () => (
  <div>
    <Head>
      <title>Create account</title>
    </Head>
    <GlobalStyles />
    <Header />
    <RegistrationForm />
    <Footer />
  </div>
);

export default Registration;
