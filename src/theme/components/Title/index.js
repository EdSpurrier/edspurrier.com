import React from 'react'
import styled, { css } from 'styled-components'

const heading = css`
    ${props => {
        const theme = props.theme;

        return `
            /* Theme & Responsive Styles */

        `;
        }
    }

`;


const H1 = styled.h1`
    ${heading}
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.h1.size}px;
            font-weight : ${theme.responsive.fonts.h1.weight}px;
        `;
        }
    }
`;

const H2 = styled.h2`
    ${heading}
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.h2.size}px;
            font-weight : ${theme.responsive.fonts.h2.weight}px;
        `;
        }
    }
`;

const H3 = styled.h3`
    ${heading}
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.h3.size}px;
            font-weight : ${theme.responsive.fonts.h3.weight}px;
        `;
        }
    }
`;

const H4 = styled.h4`
    ${heading}
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.h4.size}px;
            font-weight : ${theme.responsive.fonts.h4.weight}px;
        `;
        }
    }
`;

const H5 = styled.h5`
    ${heading}
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.h5.size}px;
            font-weight : ${theme.responsive.fonts.h5.weight}px;
        `;
        }
    }
`;


const Title = ({level, children, ...props}) => {

  const renderType = () => {
    switch (level) {
      case 1       : return <H1 {...props}>{children}</H1>;
      case 2       : return <H2 {...props}>{children}</H2>;
      case 3       : return <H3 {...props}>{children}</H3>;
      case 4       : return <H4 {...props}>{children}</H4>;
      case 5       : return <H5 {...props}>{children}</H5>;
      default      : return <H1 {...props}>{children}</H1>;
    }
  }

  return renderType();
}

export default Title