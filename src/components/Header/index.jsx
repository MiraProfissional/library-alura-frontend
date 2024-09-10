import React from 'react';
import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';
import './styles.css';

function Header() {
  return (
    <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconsHeader />
    </header>
  )
}

export default Header
