import { css } from "styled-components";

export const commonBtn = css`
  padding: ${props => props.common && ".3rem"};
  background: ${props => props.common && "inherit"};
  color: ${props => props.common && "white"};
  border: ${props => props.common && "none"};
  cursor: ${props => props.common && "pointer"};
`;
