import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/every_page_components/header";
import { RegistrationForm } from "../../components/pages_markup_chunks/auth/auth_forms";
import Footer from "../../components/every_page_components/footer/footer";

const Registration = () => (
  <div>
    <Head>
      <title>Sign in</title>
    </Head>
    <GlobalStyles />
    <Header />
    <RegistrationForm />
    <Footer />
  </div>
);

export default Registration;
