import React from 'react'
import styled from 'styled-components'
import { Flex } from 'theme'

const Container = styled.div`

    border-bottom: 1px solid grey;
    ${Flex.Flex}
    ${Flex.Center};
    padding-left: 20px;

    ${props => {
        const theme = props.theme;

        return `
            /* Theme & Responsive Styles */
            height: ${theme.responsiveSizes.nav.main.height}px;
        `;
        }
    }

`;


const FakeNav = () => {
  return (
    <Container>
    </Container>
  )
}

export default FakeNav