import React, { Fragment } from "react";

import HomeWelcome from "./welcome/welcome";
import InvestNow from "./invest_now/indexInvest";
import LatestProperty from "./latest_property/indexLatestProperty";

function Home() {
  return (
    <Fragment>
      <HomeWelcome />
      <InvestNow />
      <LatestProperty />
    </Fragment>
  );
}

export default Home;
