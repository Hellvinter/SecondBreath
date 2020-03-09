import React from "react";
import styled from "styled-components";

const socialLinks = [
  {
    img: "https://img.icons8.com/color/24/000000/github--v1.png",
    link: "https://github.com/Hellvinter/fantasy-worlds",
    alt: "GitHub account",
    title: "GitHub"
  },
  {
    img: "https://img.icons8.com/color/24/000000/twitter.png",
    link: "https://twitter.com/Hellvinter",
    alt: "Twitter account",
    title: "Twitter"
  },
  {
    img: "https://img.icons8.com/windows/24/000000/dev.png",
    link: "https://dev.to/hellvinter",
    alt: "Dev community",
    title: "Dec community"
  }
];

function SocialMedia() {
  return socialLinks.map(item => (
    <StyledItem key={item.index}>
      <a href={item.link}>
        <img src={item.img} alt={item.alt} title={item.title} />
      </a>
    </StyledItem>
  ));
}

const StyledItem = styled.li`
  margin-right: 2rem;
`;

export default SocialMedia;
