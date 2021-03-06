import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core"

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: monospace;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`
export const ImageWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;

  // @media (max-width: ${breakpoints.l}px){
  //   width: 970px
  // }

  // @media (max-width: ${breakpoints.ml}px){
  //   width: 970px
  // }

`
export const ContentContainer = styled.div`
  // width: 1170px;
    margin: 0 10rem;

  // @media (max-width: ${breakpoints.l}px){
  //   width: 970px
  // }

  @media (max-width: ${breakpoints.m}px){
    margin: 0 3rem;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.l}px){
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 40px;
    margin-bottom: 20px;
  }
`