import React from 'react'
import styled from 'styled-components'
import { Flex } from 'theme';

const Container = styled.div`

    ${props => {
        const theme = props.theme;
        
        return `
            /* Theme & Responsive Styles */
            ${props.layoutStyle.includes('Flex')&&Flex.Flex}
            ${props.layoutStyle.includes('CenterX')&&Flex.Center.X}
            ${props.layoutStyle.includes('CenterY')&&Flex.Center.Y}
            
            ${props.layoutStyle.includes('Column')&&Flex.Column}
        `;
        }
    }

`;
/* ${props.layoutStyle.includes('FullH')&&('height: calc(100vh - '+(theme.responsive.sizes.nav.main.height)+'px)')}; */

const Layout = ({layoutStyle, children}) => {
  return (
    <Container layoutStyle={layoutStyle}>
        {children}
    </Container>
  )
}

export default Layout