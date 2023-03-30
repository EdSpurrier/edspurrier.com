//  Color Palette
const palette = {
  black             : '#000',
  white             : '#fff',
  cyan100           : '#CCF6FE',
  blue50            : '#E0E7F2',
  blue500           : '#1242F9',
  blue900           : '#040D21',
  grey50            : '#F8F8F8',
  grey100           : '#F2F2F2',
  grey200           : '#CCCCCC',
  grey300           : '#B2B2B2',
  grey400           : '#E2E9F2',
  grey500           : '#808080',
  grey600           : '#666666',
  grey700           : '#4D4D4D',
  grey900           : '#1A1A1A',
  green             : '#37B34A',
  green2            : '#17CF97',
  coolGrey50        : '#F3F6F9',
  coolGrey100       : '#EFF3F7',
  coolGrey200       : '#EBF0F6',
  coolGrey300       : '#E7EDF4',
  coolGrey400       : '#E2E9F2',
  coolGrey600       : '#C9D0D9',
  coolGrey800       : '#595C60',
  coolGrey900       : '#434548',
  magenta500        : '#DF00C7',
  magenta100        : '#FFB8F7',
  deepPurple500     : '#673AB7',
  deepPurple600     : '#5E35B1',
  purple500         : '#8960F9',
  purple100         : '#CFBFFD',
  success100        : '#DEF9E1',
  success500        : '#B0F2B7',
  success700        : '#67A870',
  warning50         : '#FFF4E6',
  warning800        : '#C05F33',
  warning900        : '#AB370C',
  error900          : '#97202C'
}

const themeColors = {
  light: {
    primary             : 'red',
    primaryHiver        : 'darkred',
    secondary           : 'orange',
    secondaryHover      : 'gold',

    background          : '#f3f6f9',
    backgroundOverlay   : 'rgba(0, 0, 0, 0.5)', 

    border              : '#E2E9F2',

    elementBackground   : '#fff',
    mainMenuIcon        : '#868B91',

  },

  dark: {
    primary             : 'red',
    primaryHiver        : 'darkred',
    secondary           : 'orange',
    secondaryHover      : 'gold',

    background          : '#f3f6f9',
    backgroundOverlay   : 'rgba(0, 0, 0, 0.5)', 

    border              : '#E2E9F2',

    elementBackground   : '#fff',
    mainMenuIcon        : '#868B91',
  },
}


const colors = {
  palette,

  lightMode     : {
    backgroundOverlay : themeColors.light.backgroundOverlay,
    background        : themeColors.light.background,
    text              : themeColors.light.black,
    textInverse       : themeColors.light.white,

    logo              : themeColors.light.primary,

    primary           : themeColors.light.primary,
    primaryHover      : themeColors.light.primaryHover,

    secondary         : themeColors.light.secondary,
    secondaryHover    : themeColors.light.secondaryHover,

    border            : themeColors.light.border,

    mainMenuIcon      : themeColors.light.mainMenuIcon,

    element           : {
      background        : themeColors.light.elementBackground,
    }
  },

  darkMode      : {
    backgroundOverlay : themeColors.dark.backgroundOverlay,
    background        : themeColors.dark.background,
    text              : themeColors.dark.black,
    textInverse       : themeColors.dark.white,

    logo              : themeColors.dark.primary,

    primary           : themeColors.dark.primary,
    primaryHover      : themeColors.dark.primaryHover,

    secondary         : themeColors.dark.secondary,
    secondaryHover    : themeColors.dark.secondaryHover,

    border            : themeColors.dark.border,

    mainMenuIcon      : themeColors.dark.mainMenuIcon,

    element           : {
      background        : themeColors.dark.elementBackground,
    }
  }

};

export default colors;
