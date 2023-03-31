import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Flex } from 'theme';

const Container = styled(motion.div)`

`;

const Loader = styled(motion.div)`
  width: 100vw;
  ${Flex.Flex}
  ${Flex.Center.XY}
  ${props => {
    const theme = props.theme;

    return `
        /* Theme & Responsive Styles */
        height: calc(100vh - ${(theme.responsiveSizes.nav.main.height + 1)}px);
        background: var(--main-bg-color);
    `;
  }
  }
  
`;


const LoadingAnimation = styled.div`
position: relative;
transform: scale(0.25);

figure {
  width: 120px;
  height: 200px;
}
figure span {
  display: block;
  position: absolute;
  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
figure span:after {
  display: block;
  content: "";
  border-style: solid;
  border-color: transparent;
  border-width: 100px 58px 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
figure span:nth-child(1) {
  -webkit-transform: rotate3d(0, 0, 1, 90deg);
  -moz-transform: rotate3d(0, 0, 1, 90deg);
  -ms-transform: rotate3d(0, 0, 1, 90deg);
  -o-transform: rotate3d(0, 0, 1, 90deg);
  transform: rotate3d(0, 0, 1, 90deg);
}
figure span:nth-child(1):after {
  border-top-color: #b3c8ff;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.1111111111s ease infinite;
  -moz-animation: split 2s 0.1111111111s ease infinite;
  animation: split 2s 0.1111111111s ease infinite;
}
figure span:nth-child(2) {
  -webkit-transform: rotate3d(0, 0, 1, 150deg);
  -moz-transform: rotate3d(0, 0, 1, 150deg);
  -ms-transform: rotate3d(0, 0, 1, 150deg);
  -o-transform: rotate3d(0, 0, 1, 150deg);
  transform: rotate3d(0, 0, 1, 150deg);
}
figure span:nth-child(2):after {
  border-top-color: #80a3ff;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.2222222222s ease infinite;
  -moz-animation: split 2s 0.2222222222s ease infinite;
  animation: split 2s 0.2222222222s ease infinite;
}
figure span:nth-child(3) {
  -webkit-transform: rotate3d(0, 0, 1, 210deg);
  -moz-transform: rotate3d(0, 0, 1, 210deg);
  -ms-transform: rotate3d(0, 0, 1, 210deg);
  -o-transform: rotate3d(0, 0, 1, 210deg);
  transform: rotate3d(0, 0, 1, 210deg);
}
figure span:nth-child(3):after {
  border-top-color: #4d7fff;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.3333333333s ease infinite;
  -moz-animation: split 2s 0.3333333333s ease infinite;
  animation: split 2s 0.3333333333s ease infinite;
}
figure span:nth-child(4) {
  -webkit-transform: rotate3d(0, 0, 1, 270deg);
  -moz-transform: rotate3d(0, 0, 1, 270deg);
  -ms-transform: rotate3d(0, 0, 1, 270deg);
  -o-transform: rotate3d(0, 0, 1, 270deg);
  transform: rotate3d(0, 0, 1, 270deg);
}
figure span:nth-child(4):after {
  border-top-color: #1a5aff;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.4444444444s ease infinite;
  -moz-animation: split 2s 0.4444444444s ease infinite;
  animation: split 2s 0.4444444444s ease infinite;
}
figure span:nth-child(5) {
  -webkit-transform: rotate3d(0, 0, 1, 330deg);
  -moz-transform: rotate3d(0, 0, 1, 330deg);
  -ms-transform: rotate3d(0, 0, 1, 330deg);
  -o-transform: rotate3d(0, 0, 1, 330deg);
  transform: rotate3d(0, 0, 1, 330deg);
}
figure span:nth-child(5):after {
  border-top-color: #0040e6;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.5555555556s ease infinite;
  -moz-animation: split 2s 0.5555555556s ease infinite;
  animation: split 2s 0.5555555556s ease infinite;
}
figure span:nth-child(6) {
  -webkit-transform: rotate3d(0, 0, 1, 390deg);
  -moz-transform: rotate3d(0, 0, 1, 390deg);
  -ms-transform: rotate3d(0, 0, 1, 390deg);
  -o-transform: rotate3d(0, 0, 1, 390deg);
  transform: rotate3d(0, 0, 1, 390deg);
}
figure span:nth-child(6):after {
  border-top-color: #0032b3;
  -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  -ms-transform: rotate3d(0.5, 1, 0, 180deg);
  -o-transform: rotate3d(0.5, 1, 0, 180deg);
  transform: rotate3d(0.5, 1, 0, 180deg);
  -webkit-animation: split 2s 0.6666666667s ease infinite;
  -moz-animation: split 2s 0.6666666667s ease infinite;
  animation: split 2s 0.6666666667s ease infinite;
}

@-webkit-keyframes split {
  0% {
    -webkit-transform-origin: 50% 100%;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  }
  25% {
    -webkit-transform-origin: 50% 100%;
    -webkit-transform: rotate3d(0, 1, 0, 360deg);
  }
  50% {
    opacity: 1;
    -webkit-transform-origin: 100% 0%;
    -webkit-transform: rotate3d(0, 1, 0, 360deg);
  }
  75% {
    opacity: 0;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
  }
}
@-moz-keyframes split {
  0% {
    -moz-transform-origin: 50% 100%;
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  }
  25% {
    -moz-transform-origin: 50% 100%;
    -moz-transform: rotate3d(0, 1, 0, 360deg);
  }
  50% {
    opacity: 1;
    -moz-transform-origin: 100% 0%;
    -moz-transform: rotate3d(0, 1, 0, 360deg);
  }
  75% {
    opacity: 0;
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  }
  100% {
    opacity: 1;
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
  }
}
@keyframes split {
  0% {
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
    -ms-transform: rotate3d(0.5, 1, 0, 180deg);
    -o-transform: rotate3d(0.5, 1, 0, 180deg);
    transform: rotate3d(0.5, 1, 0, 180deg);
  }
  25% {
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: rotate3d(0, 1, 0, 360deg);
    -moz-transform: rotate3d(0, 1, 0, 360deg);
    -ms-transform: rotate3d(0, 1, 0, 360deg);
    -o-transform: rotate3d(0, 1, 0, 360deg);
    transform: rotate3d(0, 1, 0, 360deg);
  }
  50% {
    opacity: 1;
    -webkit-transform-origin: 100% 0%;
    -moz-transform-origin: 100% 0%;
    -ms-transform-origin: 100% 0%;
    -o-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-transform: rotate3d(0, 1, 0, 360deg);
    -moz-transform: rotate3d(0, 1, 0, 360deg);
    -ms-transform: rotate3d(0, 1, 0, 360deg);
    -o-transform: rotate3d(0, 1, 0, 360deg);
    transform: rotate3d(0, 1, 0, 360deg);
  }
  75% {
    opacity: 0;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
    -ms-transform: rotate3d(0.5, 1, 0, 180deg);
    -o-transform: rotate3d(0.5, 1, 0, 180deg);
    transform: rotate3d(0.5, 1, 0, 180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0.5, 1, 0, 180deg);
    -moz-transform: rotate3d(0.5, 1, 0, 180deg);
    -ms-transform: rotate3d(0.5, 1, 0, 180deg);
    -o-transform: rotate3d(0.5, 1, 0, 180deg);
    transform: rotate3d(0.5, 1, 0, 180deg);
  }
}
`;

const PageLoader = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Suspense fallback={
        <Loader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <LoadingAnimation>
            <figure>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </figure>
          </LoadingAnimation>
        </Loader>
      }>
        {children}
      </Suspense>
    </Container>
  )
}

export default PageLoader