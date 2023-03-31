import React from 'react'
import styled from 'styled-components'

const StyledCaption = styled.div`
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.caption.size}px;
            font-weight : ${theme.responsive.fonts.caption.weight}px;
        `;
        }
    }
`;

export const Caption = ({children, ...props}) => { 
    return <StyledCaption {...props}>{children}</StyledCaption>;
}


const StyledSubHeading = styled.div`
    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            font-size   : ${theme.responsive.fonts.subheading.size}px;
            font-weight : ${theme.responsive.fonts.subheading.weight}px;
        `;
        }
    }
`;


export const SubHeading = ({children, ...props}) => { 
    return <StyledSubHeading {...props}>{children}</StyledSubHeading>;
}
  


