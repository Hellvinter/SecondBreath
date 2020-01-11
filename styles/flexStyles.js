import { css } from "styled-components";

// Basic flex styles

export const flexRow = css`
  display: ${props => props.flex && "flex"};
`;

export const flexColumn = css`
  display: ${props => props.flex && "flex"};
  flex-direction: ${props => props.flex && "column"};
`;

export const noWraping = css`
  flex-wrap: ${props => (props.flex ? "nowrap" : "wrap")};
`;

// Justify-content block for flex row.
// Align: center;

export const justifyStart = css`
  justify-content: ${props => props.flex && "flex-start"};
  align-items: ${props => props.flex && "center"};
`;

export const justifyEnd = css`
  justify-content: ${props => props.flex && "flex-end"};
  align-items: ${props => props.flex && "center"};
`;

export const justifyCenter = css`
  justify-content: ${props => props.flex && "center"};
  align-items: ${props => props.flex && "center"};
`;

export const justifyBetween = css`
  justify-content: ${props => props.flex && "space-between"};
  align-items: ${props => props.flex && "center"};
`;

export const justifyAround = css`
  justify-content: ${props => props.flex && "space-around"};
  align-items: ${props => props.flex && "center"};
`;

export const justifyEvenly = css`
  justify-content: ${props => props.flex && "space-evenly"};
  align-items: ${props => props.flex && "center"};
`;

// Align-items block for flex column.
// Justify: center.

export const alignStart = css`
  align-items: ${props => props.flex && "flex-start"};
  justify-content: ${props => props.flex && "center"};
`;

export const alignEnd = css`
  align-items: ${props => props.flex && "flex-end"};
  justify-content: ${props => props.flex && "center"};
`;

export const alignCenter = css`
  align-items: ${props => props.flex && "center"};
  justify-content: ${props => props.flex && "center"};
`;

export const alignBetween = css`
  align-items: ${props => props.flex && "space-between"};
  justify-content: ${props => props.flex && "center"};
`;

export const alignAround = css`
  align-items: ${props => props.flex && "space-around"};
  justify-content: ${props => props.flex && "center"};
`;

export const alignEvenly = css`
  align-items: ${props => props.flex && "space-evenly"};
  justify-content: ${props => props.flex && "center"};
`;
