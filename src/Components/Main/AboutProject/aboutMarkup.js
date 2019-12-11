import React, { Fragment } from "react";

function AboutMarkup(props) {
  return (
    <Fragment>
      <h2>About project</h2>
      <p>{props.about}</p>
      <h3>Purpose</h3>
      <p>{props.purpose}</p>
      <h3>Project's Todo list</h3>
    </Fragment>
  );
}

export default AboutMarkup;
