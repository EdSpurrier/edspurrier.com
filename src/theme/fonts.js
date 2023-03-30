var WebFont = require('webfontloader');
 
WebFont.load({
  google: {
    families: ['DM Sans:300,400,500,600,700,800']
  }
});


const standardFontSizes = {
  xxxxs           : "10px",   //  Font size: 10px / 0.625rem | Line height: 14px / 0.875rem | Tracking: 0px
  xxxs            : "12px",   //  Font size: 12px / 0.75rem | Line height: 16px / 1rem | Tracking: 0px
  xxs             : "14px",   //  Font size: 14px / 0.875rem | Line height: 20px / 1.25rem | Tracking: 0px
  xs              : "16px",   //  Font size: 16px / 1rem | Line height: 24px / 1.5rem | Tracking: 0px
  small           : "18px",   //  Font size: 18px / 1.125rem | Line height: 28px / 1.75rem | Tracking: 0px
  small_medium    : "20px",   //  Font size: 20px / 1.25rem | Line height: 28px / 1.75rem | Tracking: 0px
  medium          : "24px",   //  Font size: 24px / 1.5rem | Line height: 36px / 2.25rem | Tracking: 0px
  medium_large    : "32px",   //  Font size: 32px / 2rem | Line height: 48px / 3rem | Tracking: 0px
  large           : "44px",   //  Font size: 44px / 2.75rem | Line height: 58px / 3.625rem | Tracking: -1px
  xl              : "48px",   //  Font size: 48px / 3rem | Line height: 64px / 4rem | Tracking: 0px
}

const standardFontWeights = {
    Hairline : "100",
    ExtraLight : "200",
    Light : "300",
    Normal : "400",
    Medium : "500",
    SemiBold : "600",
    Bold : "700",
    ExtraBold : "800",
    Heavy : "900",
    Inherit : "inherit"
}

const fonts = {
  desktop: {
    h1: {
      size: standardFontSizes.xl,
      weight: standardFontWeights.Bold
    },
    h2: {
      size: standardFontSizes.large,
      weight: standardFontWeights.Bold
    },
    h3: {
      size: standardFontSizes.medium_large,
      weight: standardFontWeights.SemiBold
    },
    h4: {
      size: standardFontSizes.medium,
      weight: standardFontWeights.SemiBold
    },
    h5: {
      size: standardFontSizes.small_medium,
      weight: standardFontWeights.Normal
    },
    subheading: {
      size: standardFontSizes.small,
      weight: standardFontWeights.Normal
    },
    body: {
      size: standardFontSizes.xs,
      weight: standardFontWeights.Normal
    },
    p: {
      size: standardFontSizes.xs,
      weight: standardFontWeights.Normal
    },
    caption: {
      size: standardFontSizes.xxs,
      weight: standardFontWeights.Light
    }
  },

  mobile: {
    h1: {
      size: standardFontSizes.xl,
      weight: standardFontWeights.Bold
    },
    h2: {
      size: standardFontSizes.large,
      weight: standardFontWeights.Bold
    },
    h3: {
      size: standardFontSizes.medium_large,
      weight: standardFontWeights.SemiBold
    },
    h4: {
      size: standardFontSizes.medium,
      weight: standardFontWeights.SemiBold
    },
    h5: {
      size: standardFontSizes.small_medium,
      weight: standardFontWeights.Normal
    },
    subheading: {
      size: standardFontSizes.small,
      weight: standardFontWeights.Normal
    },
    body: {
      size: standardFontSizes.xs,
      weight: standardFontWeights.Normal
    },
    p: {
      size: standardFontSizes.xs,
      weight: standardFontWeights.Normal
    },
    caption: {
      size: standardFontSizes.xxs,
      weight: standardFontWeights.Light
    }
  },
}

export default fonts;