import React from 'react';
import profile from '../../images/perfil.svg';
import shoppingBage from '../../images/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  list-style: none;
  margin-right: 40px;
  width: 25px;
`


const icons = [profile, shoppingBage];

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icons) => (
        <Icon className="icons-navbar">
          <img src={icons} alt="" />
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
