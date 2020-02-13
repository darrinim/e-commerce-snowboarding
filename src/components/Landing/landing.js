import React from 'react';
import { LandingWrap, LandingHero, Fog, fogAnimation } from './landingStyles.js';
import { css, keyframes } from '@emotion/core'

const Landing = () => {

  return (
    <LandingWrap>
        <LandingHero src="https://res.cloudinary.com/darrin-im/image/upload/v1581453945/ghostLanding_copy_2_r6aszv.jpg"/>
        <Fog css={css`animation: fogAnimation 1s linear infinite`}></Fog>
        <Fog css={css`animation: fogAnimation 1s linear infinite`}></Fog>
    </LandingWrap>
  )
}

export default Landing;