import React from "react";
import Head from "next/head";

import GlobalStyles from "../../styles/globalStyles";
import Header from "../../components/every_page_components/header";
import Footer from "../../components/every_page_components/footer/footer";

const SignIn = () => (
  <div>
    <Head>
      <title>Sign in</title>
    </Head>
    <GlobalStyles />
    <Header />
    <main className="centered">
      <div className="form-wrapper">
        <h3>Sign in</h3>
        <form className="form">
          <label className="label">
            User name
            <input className="input" type="text" name="user" />
          </label>
          <label className="label">
            Password
            <input className="input" type="password" name="password" />
          </label>
          <button className="submit-btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </main>
    <Footer />

    <style jsx>{`
      .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        min-height: 15rem;
        min-width: 25rem;
        box-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
      }

      .form {
        display: flex;
        flex-direction: column;
      }

      .label {
        display: inline-box;
        margin 1rem auto;
      }
      
      .input {
        margin-left: .5rem;
      }

      .submit-btn {
        background: none;
        border: 1px solid black;
        width: 5rem;
        cursor: pointer;
        margin: 1rem auto;
      }
    `}</style>
  </div>
);

export default SignIn;
