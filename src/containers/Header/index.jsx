import React from 'react';
import Nav from '../../components/Nav';
import options from '../../data/menu.json'

const Header = () => {
  return (
    <header>
      <Nav options={options.items} color={'yellow'} />
    </header>
  )
}

export default Header
