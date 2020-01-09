import { css } from "styled-components";

export const clearfix = css`
  clear: both;
  content: "";
  display: table;
`;

export const container = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

export const hideText = css`
  overflow: hidden;
  padding: 0;
  text-indent: 101%;
  white-space: nowrap;
`;

export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
