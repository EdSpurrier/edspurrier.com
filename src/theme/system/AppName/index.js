import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 1000;
  background: white;
  color: black;
  padding: 5px;
  border-radius: 15px;
  opacity: 0.5;
  font-size: 8px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    font-size: 12px;
    background: green;
    color: white;
  }
`


const AppName = ({appName, ...props}) => {
  return (
    appName &&
    <Container {...props}>
        {appName}
    </Container>
  )
}

export default AppName