import React from 'react'
import styled from 'styled-components'
import { Colors, Flex } from 'theme';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import BottomMenu from './BottomMenu';

const Container = styled.div`
    ${Colors.Placeholder.Green}


    ${props => {
        const theme = props.theme;

        return `
            /* Theme & Responsive Styles */

        `;
        }
    }

`;




const Navigation = () => {
  return (
    <Container>
        <TopMenu />
        <SideMenu side={'right'}/>
        <SideMenu side={'left'}/>
        <BottomMenu />
    </Container>
  )
}

export default Navigation