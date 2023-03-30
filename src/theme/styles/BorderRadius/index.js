import { css } from "styled-components";
import ArkTheme from "../../ArkTheme";


//   Borders
export const BorderStyles = {
    

    Radius : {
        default : css`
            border-radius: ${ArkTheme.borders.radius.default}px;
        `,
        xs : css`
            border-radius: ${ArkTheme.borders.radius.xs}px;
        `,
        small : css`
            border-radius: ${ArkTheme.borders.radius.small}px;
        `,
        large : css`
            border-radius: ${ArkTheme.borders.radius.large}px;
        `,
    }


}