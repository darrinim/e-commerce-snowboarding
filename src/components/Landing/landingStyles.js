import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'
import './fog.css';

export const LandingWrap = styled.div`
  width: 100%!important;
  // height: 100vh;
  // max-height: 630px;
  max-height: 710px;
  overflow: hidden;
  position: relative
  // above is a test
`

export const LandingHero = styled.img`
  width: 100%!important;
  // height: 95vh
  // filter: invert(50%);
`
export const Fog = styled.div`
  background: url(https://res.cloudinary.com/darrin-im/image/upload/v1581567122/Pngtree_cloud_mountain_fog_white_smoke_3919122_fqqi8n.png);
  /* background-size: contain; */
  background-repeat: repeat-x;
  background-position: center;
  z-index: 9999;
  // opacity: 0.2;
  /* background-color: black; */
  /* border: 9px solid red; */
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: fogAnimation 60s linear infinite;
`

