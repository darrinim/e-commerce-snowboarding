import React from 'react';
import './seeTeam.scss';
import { Link } from 'gatsby';
import { ImageWrap } from '~/utils/styles'

const SeeTeam = () => {

  return (
    <ImageWrap>
      <Link to="/team">
        <img className="team-image test" src="https://res.cloudinary.com/darrin-im/image/upload/v1581523142/team_copy_2_op8jzb.jpg"/>
        <p><Link to="/team" className="team-link">Team</Link></p>
      </Link>
    </ImageWrap>
  )
}


export default SeeTeam;