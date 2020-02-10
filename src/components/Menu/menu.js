import React from 'react';
import './menuStyles.css';
import { Link } from 'gatsby';

const Menu = ( {close} ) => {

  return (
    <div className="menu">
      <ul>
        <li onClick={close}><Link className="menu-link" to="/shop">Boards</Link></li>
        <li onClick={close}><Link className="menu-link" to="/shop">Jackets</Link></li>
        <li onClick={close}><Link className="menu-link" to="/shop">Boots</Link></li>
      </ul>
    </div>
  )
}


export default Menu;