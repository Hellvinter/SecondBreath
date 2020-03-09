import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/generic_components/header/index";
import SignInForm from "../../components/generic_components/auth/login";
import Footer from "../../components/generic_components/footer/index";

const SignIn = () => (
  <div className="theme">
    <Head>
      <title>Sign in</title>
    </Head>
    <GlobalStyles />
    <Header />
    <SignInForm />
    <Footer />
    <style jsx>{`
      .theme {
        background-color: #15202a;
      }
    `}</style>
  </div>
);
export default SignIn;
