import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/common/header/index";
import SignInForm from "../../components/common/auth/login";
import Footer from "../../components/common/footer/index";

const SignIn = () => (
  <div>
    <Head>
      <title>Sign in</title>
    </Head>
    <GlobalStyles />
    <Header />
    <SignInForm />
    <Footer />
  </div>
);

export default SignIn;
