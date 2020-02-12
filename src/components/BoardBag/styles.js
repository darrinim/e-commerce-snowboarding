import React from 'react';
import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'


export const BoardBagWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media(max-width: ${breakpoints.m}px {
    grid-template-columns: 1fr 1fr;
  })
`

export const BoardWrap = styled.div`
  // grid-area: left;
  height: 360px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
`

export const BagWrap = styled.div`
  /* grid-area: right; */
  height: 360px;
  overflow: hidden;
  position: relative;
`