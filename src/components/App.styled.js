import styled from 'styled-components';

import background from './images/wallpapermovie.jpg'




export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  
  &:before {
    content: '';
    background-image: 
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }

`;