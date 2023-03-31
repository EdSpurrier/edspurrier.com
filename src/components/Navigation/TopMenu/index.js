import React from 'react'
import styled from 'styled-components'
import { Colors, Flex } from 'theme';

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    ${Colors.Placeholder.Red}
    ${Flex.Flex};
    ${Flex.Center.Y};


    ${props => {
      const theme = props.theme;

      return `
        /* Theme & Responsive Styles */

      `;
    }}

`;


const TopMenu = () => {
  return (
    <Container>
        TopMenu
    </Container>
  )
}

export default TopMenu