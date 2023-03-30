import { css } from "styled-components";

export const DisplayFlex = css`
    display: flex;
`;

export const Center = {
    Y : css`align-items: center;`,
    X : css`justify-content: center;`,
    XY : css`
        justify-content: center;
        align-items: center;
    `
};

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Column = css`
    flex-direction: column;
`;

export const Wrap = css`
    flex-wrap: wrap;
`;

export const SpaceBetween = css`
    justify-content: space-between;
`;


export const ColumnReverse = css`
    flex-direction: column-reverse;
`;


export const Row = css`
    flex-direction: row;
`;

export const RowReverse = css`
    flex-direction: row-reverse;
`;


export const Flex = {
    Flex : DisplayFlex,
    Center,
    FlexCenter,
    Column,
    Wrap,
    SpaceBetween,
    Column,
    ColumnReverse,
    Row,
    RowReverse
}