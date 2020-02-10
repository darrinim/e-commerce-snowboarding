import React from 'react';
import './menuStyles.css';
import { Link } from 'gatsby';

const Menu = ( {close} ) => {

  return (
    <div>
      <ul>
        <li onClick={close}><Link onClick={close} to="/shop">Boards</Link></li>
        <li onClick={close}><Link to="/shop">Jackets</Link></li>
        <li onClick={close}><Link to="/shop">Boots</Link></li>
      </ul>
    </div>
  )
}


export default Menu;