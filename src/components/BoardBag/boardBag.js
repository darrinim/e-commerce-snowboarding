import React from 'react';
import { BoardBagWrap, BoardWrap, BagWrap } from './styles'
import '../../components/SeeTeam/seeTeam.scss'
import { ImageWrap } from '~/utils/styles'
import { Link } from 'gatsby';

const BoardBag = () => {

  return (
    <ImageWrap>
      <BoardBagWrap>
        <BoardWrap>
          <img className="team-image" src="https://res.cloudinary.com/darrin-im/image/upload/v1581523321/boards_copy_wdefpr.jpg" />
          <p><Link to="/team" className="team-link">Boards</Link></p>
        </BoardWrap>
        <BagWrap>
          <img className="team-image" src="https://res.cloudinary.com/darrin-im/image/upload/v1581525224/goggles-man_tcixfs.jpg" />
          <p><Link to="/team" className="team-link">Goggles</Link></p>
        </BagWrap>
      </BoardBagWrap>
    </ImageWrap>
  )
}

export default BoardBag;