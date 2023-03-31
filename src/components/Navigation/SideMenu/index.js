import React from 'react'
import styled from 'styled-components'
import { Colors, Flex } from 'theme';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;

    ${Colors.Placeholder.Red}
    ${Flex.Flex};
    ${Flex.Center.Y};


    ${props => {
      const theme = props.theme;

      return `
        /* Theme & Responsive Styles */
        ${props.side}: 0;
      `;
    }}

`;


const SideMenu = ({side='left'}) => {
  return (
    <Container side={side}>
        SideMenu
    </Container>
  )
}

export default SideMenu