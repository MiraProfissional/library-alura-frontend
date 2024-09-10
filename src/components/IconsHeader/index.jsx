import React from 'react';
import './styles.css';
import profile from '../../images/perfil.svg';
import shoppingBage from '../../images/sacola.svg';

const icons = [profile, shoppingBage];

function IconsHeader() {
  return (
    <ul className="icons">
      {icons.map((icons) => (
        <li className="icons-navbar">
          <img src={icons} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
