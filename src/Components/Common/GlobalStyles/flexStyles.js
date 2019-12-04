import {css} from 'styled-components';

// Basic flex styles

export const flexRow = css``;

export const flexColumn = css``;

export const noWraping = css``;

// Justify-content block for flex row.
// Align: center;

export const justifyStart = css`
    justify-content: flex-start;
    align-items: center;
`;

export const justifyEnd = css`
    justify-content: flex-end;
    align-items: center;
`;

export const justifyCenter = css`
    justify-content: center;
    align-items: center;
`;

export const justifyBetween = css`
    justify-content: space-between;
    align-items: center;
`;

export const justifyAround = css`
    justify-content: space-around;
    align-items: center;
`;

export const justifyEvenly = css`
    justify-content: space-evenly;
    align-items: center;
`;

// Align-items block for flex column.
// Justify: center.

export const alignStart = css`
    align-items: flex-start;
    justify-content: center;
`;

export const alignEnd = css`
    align-items: flex-end;
    justify-content: center;
`;

export const alignCenter = css`
    align-items: center;
    justify-content: center;
`;

export const alignBetween = css`
    align-items: space-between;
    justify-content: center;
`;

export const alignAround = css`
    align-items: space-around;
    justify-content: center;
`;

export const alignEvenly = css`
    align-items: space-evenly;
    justify-content: center;
`;