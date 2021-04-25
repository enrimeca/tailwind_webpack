import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Toggle from '../Toggle'

const Nav = ({ options }) => {
  const [hidden, setHidden] = useState(true);
  const show = hidden? 'hidden' : '';

  const toggleMenu = (event) => {
    event.preventDefault();
    setHidden(!hidden);
  }

  return (
    <nav className="bg-yellow-600 dark:bg-black">
      <section className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <figure className="flex-shrink-0">
          <img className="h-16" src={Logo} alt="Logo" />
        </figure>
        <div className="hidden md:block">
          {options?.map((item, index) => <a key={index} href="/" className="item-menu">{item}</a>)}
          <Toggle />        
        </div>        
        <button type="button" className="flex md:hidden collapse-btn" onClick={toggleMenu} aria-label="open menu" >
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </section>
      <section className={`md:hidden ${show}`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {options?.map((item, index) => <li key={index}><a href="/" className="item-menu block">{item}</a></li>)}
          <Toggle />
        </ul>
      </section>
    </nav>
  )
}

export default Nav