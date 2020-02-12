import { createGlobalStyle } from 'styled-components';

import AntonioLight from './Antonio-Light.ttf';



export default createGlobalStyle`
  @font-face {
    font-family: 'Antonio-Light';
    src: local('Antonio-Light'), local('Antonio-Light'), url(${Antonio-Lightttf}) format('ttf')
    font-style: normal;
  }`;