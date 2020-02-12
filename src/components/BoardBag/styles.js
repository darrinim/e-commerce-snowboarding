import React from 'react';
import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'


export const BoardBagWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left . right";
  // margin: 0 20px;
  width: 100%;

  @media(max-width: ${breakpoints.s}px) {
    display: block;
  }

  @media(max-width: ${breakpoints.l}px) {
    grid-template-columns: 1fr 1fr; 
    // width: 970px;
  }

  @media(max-width: ${breakpoints.m}px) {
    // width: 750px;
  }
`

export const BoardWrap = styled.div`
  // grid-area: left;
  height: 360px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;

  @media(max-width: ${breakpoints.s}px) {
    margin-right: 0;
  }

  @media(max-width: ${breakpoints.m}px) {
    // width: 750px;
  }

  @media(max-width: ${breakpoints.l}px) {
    height: 230px;
  }
`

export const BagWrap = styled.div`
  /* grid-area: right; */
  height: 360px;
  overflow: hidden;
  position: relative;

  @media(max-width: ${breakpoints.m}px) {
    // width: 750px;
  }

  @media(max-width: ${breakpoints.l}px) {
    height: 230px;
  }
  
`