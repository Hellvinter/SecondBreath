import React from "react";
import styled from "styled-components";

import { flexRow, flexColumn, alignCenter } from "../../../styles/flexStyles";

const domainsData = [
  {
    name: "Fantasy creation",
    background:
      "/backgrounds/our_domains/fantasy-creation_wallpaperscraft_portal_art_1920x1080.jpg",
    status: "work in progress"
  },
  {
    name: "Soul creation",
    background:
      "/backgrounds/our_domains/soul-creation_wallpaperscraft_dark_light_castle_1920x1080.jpg",
    status: "work in progress"
  },
  {
    name: "World creation",
    background:
      "/backgrounds/our_domains/world-creation_wallpaperscraft_house_fairy_tale_1920x1080.jpg",
    status: "work in progress"
  },
  {
    name: "Library",
    background:
      "/backgrounds/our_domains/library_wallpaperscraft_library_columns_castle_1920x1080.jpg",
    status: "work in progress"
  },
  {
    name: "Reading Suggestion",
    background:
      "/backgrounds/our_domains/reading-suggestion_wallpaperscraft_book_sphere_1920x1080.jpg",
    status: "work in progress"
  }
];

// SOMEHOW I SHOULD DISPLAY BACKGROUNDS

const FeatureList = props => {
  return props.object.map(item => (
    <Feature
      flex
      style={{
        background: `url(${item.background})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat"
      }}
    >
      <FeatureName>{item.name}</FeatureName>
      <FeatureLink>{item.status}</FeatureLink>
    </Feature>
  ));
};

function OurFeatures() {
  return (
    <FeaturesSection flex>
      <FeaturesHeading>Our Domains</FeaturesHeading>
      <Wrapper flex>
        <FeatureList object={domainsData} />
      </Wrapper>
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
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

const Wrapper = styled.div`
  ${props => props.flex && flexRow};
  flex-wrap: wrap;
`;

const Feature = styled.div`
  margin: 0;
  padding: 0;
  height: 25rem;
  min-width: 33%;
  max-width: 50%;
  ${props => props.flex && [flexColumn, alignCenter]};
  flex-grow: 1;
`;

const FeatureName = styled.h4`
  margin: 2rem 0 3rem 0;
  text-align: center;
  font-weight: 600;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

// PlaceHolder
const FeatureLink = styled.button`
  margin-bottom: 2rem;
  border: none;
  background: none;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

export default OurFeatures;
