import React from 'react';
import './seeTeam.css';
import { Link } from 'gatsby';
import { ImageWrap } from '~/utils/styles'

const SeeTeam = () => {

  return (
    <ImageWrap>
      <img className="team-image" src="https://res.cloudinary.com/darrin-im/image/upload/v1581451655/team_copy_m3kkja.jpg"/>
      <p><Link to="/team" className="team-link">Team</Link></p>
    </ImageWrap>
  )
}

export default SeeTeam;