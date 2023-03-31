import React from 'react'
import styled from 'styled-components'
import { Colors, Flex } from 'theme';

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

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


const BottomMenu = () => {
  return (
    <Container>
      BottomMenu
    </Container>
  )
}

export default BottomMenu