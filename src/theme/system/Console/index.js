import clsx from 'clsx';
import React, { useState } from 'react'
import styled from 'styled-components';
import useEventListener from '../Hooks/useEventListener';

const Container = styled.div`
    position: fixed;
    bottom: calc(-30vh - 1px);
    height: 30vh;
    left: 0;
    right: 0;
    background: #111;
    color: #888;
    font-family: monospace;
    transition: 0.3s;
    border-top: 1px solid #444;
    z-index: 1000;
    &.active {
        bottom: 0;
        opacity: 1;
    }
`;

const TestComponents = styled.div`
    border-bottom: 1px solid #888;
    padding: 20px;
    
`;

const KeyboardInput = styled.div`
    border-bottom: 1px solid #888;
    padding: 20px;
`;


const Output = styled.div`
    padding: 20px;
`;

const Console = ({testComponents=null}) => {
    const [active, setActive] = useState(false);
    const [keyPressed, setKeyPressed] = useState(null);

    useEventListener('keyup', (evt) => {
        setKeyPressed(evt.code);
        if (evt.code === 'Backquote') {
            setActive(!active);
        };
    });


  return (
    <Container className={clsx(active?'active':'')}>
        <KeyboardInput>Key: {keyPressed}</KeyboardInput>
        <TestComponents>
            Test Components<br />
            {testComponents}
        </TestComponents>
        <Output>
            Console
        </Output>
    </Container>
  )
}

export default Console