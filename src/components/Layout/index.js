import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    ${props => {
        const theme = props.theme;
        return `
            /* Theme & Responsive Styles */
            ${props.layoutStyle.includes('Flex')&&Flex.Flex}
            ${props.layoutStyle.includes('CenterX')&&Flex.Center.X}
            ${props.layoutStyle.includes('CenterY')&&Flex.Center.Y}
            ${props.layoutStyle.includes('FullH')&&('height: calc(100vh - '+(theme.responsiveSizes.nav.main.height+1)+'px)')};
            ${props.layoutStyle.includes('Column')&&Flex.Column}
        `;
        }
    }

`;


const Layout = ({layoutStyle, children}) => {
  return (
    <Container layoutStyle={layoutStyle}>
        {children}
    </Container>
  )
}

export default Layout