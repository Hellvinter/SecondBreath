import React, { Fragment } from "react";
import styled from "styled-components";

import { flexRow, justifyAround } from "../GlobalStyles/flexStyles";

const FilterForm = styled.form`
  width: 70%;
  margin: 0 auto;
  ${props => props.flex && [flexRow, justifyAround]};
`;

const FilterLayout = () => {
  /*================================================
     Constants value/name for FilterOptions
     I separate value for each of select tags
     Before I did that info taken from that constants
     Was Displaying incorectly  
    ================================================*/

  const Price = [
    { value: "price-0", name: "0" },
    { value: "price-50000", name: "50000" },
    { value: "price-100000", name: "100000" },
    { value: "price-150000", name: "150000" }
  ];

  const beds = [
    { value: "bed-1", name: "1" },
    { value: "bed-1+", name: "1+" },
    { value: "bed-2", name: "2" },
    { value: "bed-2+", name: "2+" }
  ];

  const baths = [
    { value: "baths-1", name: "1" },
    { value: "baths-1+", name: "1+" },
    { value: "baths-2", name: "2" },
    { value: "baths-2+", name: "2+" }
  ];

  /*==================================================== 
        I make a sub component that I will call in return
        It's render select tag.
        Variable that used for .map() passed as prop
        Default value also, passed as prop
    ====================================================*/

  const FilterOptions = props => {
    return (
      <select>
        <option value="" default>
          {props.default}
        </option>
        {props.object.map((item, i) => (
          <Fragment>
            <option key={i} value={item.value}>
              {item.name}
            </option>
          </Fragment>
        ))}
      </select>
    );
  };

  /*========================================================
        In return I call FilterOptions component couple of times
        I do this in order to avoid bug.
        Before I do it that way.    
        Data were displayed incorectly
    ========================================================*/

  return (
    <div id="estateFilter">
      <FilterForm flex>
        <input type="text" />
        <FilterOptions object={Price} default="Min Price" />
        <FilterOptions object={Price} default="Max Price" />
        <FilterOptions object={beds} default="Beds" />
        <FilterOptions object={baths} default="Baths" />
        <button> => </button>
      </FilterForm>
    </div>
  );
};

export default FilterLayout;
