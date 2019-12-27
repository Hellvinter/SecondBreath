import React from "react";
import styled from "styled-components";

import {
  flexRow,
  flexColumn,
  noWraping,
  justifyBetween,
  alignCenter
} from "../../../reusable_styles/flexStyles";

const ItemOfCarousel = props => {
  const arrows = {
    left: "https://img.icons8.com/clouds/80/000000/circled-chevron-left.png",
    right: "https://img.icons8.com/clouds/80/000000/circled-chevron-right.png",
    alt: "arrow"
  };

  return (
    <Carousel flex>
      <ArrowBtn
        onClick={props.previous}
        // disable "previouse" button if index equal 0
        // that way I temporaly fix issue with negative index
        disabled={props.count.index === 0}
      >
        <img src={arrows.left} alt={arrows.alt} />
      </ArrowBtn>
      <ViewSpace flex>
        {props.data.map(item => (
          <Card flex key={item._id}>
            {/* 
              Note.
              I pass props.count to displayed data
              So it will be displayed according to object index
              Like props.count.property
              If I don't did that
              Only property of object with index 0 will be displayed
             */}
            <img src={props.count.picture} alt={props.count.city} />
            <h3>{props.count.city}</h3>
            <p>{props.count.address}</p>
          </Card>
        ))}
      </ViewSpace>
      <ArrowBtn onClick={props.next}>
        <img src={arrows.right} alt={arrows.alt} />
      </ArrowBtn>
    </Carousel>
  );
};

// Styled components.

const Carousel = styled.div`
  max-width: 50rem;
  width: 100%;
  ${props => props.flex && [flexRow, noWraping, justifyBetween]};
`;

const ViewSpace = styled.div`
  width: 100%;
  overflow-x: hidden;
  ${props => props.flex && [flexRow, noWraping, justifyBetween]};
`;

const Card = styled.div`
    ${props => props.flex && [flexColumn, alignCenter]};
    flex: 0 0 100%;
    padding-top 3rem;
`;

const ArrowBtn = styled.button`
  padding: 2rem 1rem;
  max-width: 5rem;
  width: 100%;
  background: none;
  border: none;
`;

export default ItemOfCarousel;
