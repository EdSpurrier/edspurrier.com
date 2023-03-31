import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import { useMediaQuery } from 'react-responsive';



const SwitchTheme = createGlobalStyle`

    :root {
                                        
        /* Main Colours */
        --main-bg-color: ${props => props.mode.background};
        --main-text-color: ${props => props.mode.text};
        --main-border-color: ${props => props.mode.border};
        --main-text-inverse-color: ${props => props.mode.textInverse};

        --logo-color: ${props => props.mode.logo};
        --logo-text-color: ${props => props.mode.text};


        /* Primary/Secondary Colours */
        --primary-color: ${props => props.mode.primary};
        --primary-hover-color: ${props => props.mode.primaryHover};
        --secondary-color: ${props => props.mode.secondary};
        --secondary-hover-color: ${props => props.mode.secondaryHover};

        /* Main Navigation */
        --main-menu-icon-color: ${props => props.mode.mainMenuIcon};

        /* Element Colours */
        --element-bg-color: ${props => props.mode.element.background};
        --main-nav-bg-color: ${props => props.mode.element.background};
    }

`;



const ResponsiveTheme = createGlobalStyle`

    :root {
        
        /* Sizes */
        --button-default-padding: ${props => props.responsive.sizes.button.default.padding}px;

    }

`;



const GlobalThemeStyles = createGlobalStyle`

    html, body {
        background: var(--main-bg-color);
        color: var(--main-text-color);
        user-select: none;
        font-family: 'DM Sans', sans-serif;
        font-size: ${props => props.responsive.fonts.body.size}px;
        font-weight: ${props => props.responsive.fonts.body.weight}px;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: calc(100vh - ${props => props.responsive.sizes.nav.main.height}px);
        max-width: 100vw;
        overflow-x: hidden;
    }

    p {
      font-size: ${props => props.responsive.fonts.body.size}px;
      font-weight: ${props => props.responsive.fonts.body.weight}px;
    }

`;


export const GlobalTheme = ({ darkMode, children, ...props }) => {

  const activeBreakpoints = {
    xs: {
      px: theme.breakpoints.xs,
      active: useMediaQuery({ minWidth: theme.breakpoints.xs })
    },
    sm: {
      px: theme.breakpoints.sm,
      active: useMediaQuery({ minWidth: theme.breakpoints.sm })
    },
    md: {
      px: theme.breakpoints.md,
      active: useMediaQuery({ minWidth: theme.breakpoints.md })
    },
    tablet: {
      px: theme.breakpoints.tablet,
      active: useMediaQuery({ minWidth: theme.breakpoints.tablet })
    },
    lg: {
      px: theme.breakpoints.lg,
      active: useMediaQuery({ minWidth: theme.breakpoints.lg })
    },
    xl: {
      px: theme.breakpoints.xl,
      active: useMediaQuery({ minWidth: theme.breakpoints.xl })
    }

  };



  const getBreakpoint = () => {
    if (activeBreakpoints.lg.active) {
      return {
        sizes : theme.sizes.desktop,
        fonts : theme.fonts.desktop
      }
    } else if (activeBreakpoints.md.active) {
      return {
        sizes : theme.sizes.mobile,
        fonts : theme.fonts.mobile
      }
    } else {
      return {
        sizes : theme.sizes.desktop,
        fonts : theme.fonts.desktop
      }
    };
  };


  return (
    <ThemeProvider theme={{
      theme: theme,
      darkMode: darkMode ? true : false,
      responsive: getBreakpoint(),
      activeBreakpoints: activeBreakpoints
    }}>
      <ResponsiveTheme responsive={getBreakpoint()} />
      <SwitchTheme mode={darkMode ? theme.colors.darkMode : theme.colors.lightMode} />
      <GlobalThemeStyles responsive={getBreakpoint()} />
      {children}
    </ThemeProvider>
  )
}

export default GlobalTheme;