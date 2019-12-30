import React from "react";
import styled from "styled-components";

import {
  flexRow,
  flexColumn,
  alignCenter
} from "../../../reusable_styles/flexStyles";

const rowOneData = [
  { name: "Fantasy creation" },
  { name: "Soul creation" },
  { name: "Worlds creation" }
];

const rowTwoData = [{ name: "Library" }, { name: "Reading Suggestion" }];

const FeatureList = props => {
  return props.object.map(feature => (
    <Feature flex>
      <FeatureName>{feature.name}</FeatureName>
      <FeatureLink>Check it</FeatureLink>
    </Feature>
  ));
};

function OurFeatures() {
  return (
    <FeaturesSection flex>
      <FeaturesHeading>Our Domains</FeaturesHeading>
      <Row flex rowOne>
        <FeatureList object={rowOneData} />
      </Row>
      <Row flex>
        <FeatureList object={rowTwoData} />
      </Row>
    </FeaturesSection>
  );
}

// Styled components.

const FeaturesSection = styled.section`
  padding: 2rem 0;
  ${props => props.flex && flexColumn}
`;

const FeaturesHeading = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  text-transform: upperscase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Row = styled.div`
  ${props => props.flex && flexRow};
`;

const Feature = styled.div`
  height: 25rem;
  width: 100%;
  border: 1px solid black;
  ${props => props.flex && [flexColumn, alignCenter]}
`;

const FeatureName = styled.h4`
  margin: 2rem 0 3rem 0;
  text-align: center;
  font-weight: 500;
  color: #000;
  tex-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

// PlaceHolder
const FeatureLink = styled.button`
  margin-bottom: 2rem;
  border: none;
  background: none;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`;

export default OurFeatures;
