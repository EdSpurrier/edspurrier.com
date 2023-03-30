import { BorderStyles } from "./BorderRadius";
import { ColorStyles } from "./Colors";
import { LayoutStyles } from "./Layout";
import { PositionStyles } from "./Position";
import { SpacingStyles } from "./Spacing";
import { TextStyles } from "./Text";

export * from "./Flex";

export const GlobalStyles = { 
    Position    : PositionStyles,
    Layout      : LayoutStyles,
    Colors      : ColorStyles,
    Spacing     : SpacingStyles,
    Text        : TextStyles,
    Border      : BorderStyles
}

