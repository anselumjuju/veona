'use client';

import { useRef } from 'react';

const Header = () => {
  const toggleButton = useRef<HTMLButtonElement>(null);
  const navLinks = useRef<HTMLUListElement>(null);

  const onClick = () => {
    const isExpanded = toggleButton.current!.getAttribute('aria-expanded') === 'true';
    toggleButton.current!.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.current!.classList.toggle('active');
  };

  return (
    <nav>
      <div className='container'>
        <div className='logo'>VEONA</div>
        <button className='mobile-toggle' aria-label='Toggle navigation' aria-expanded='false' aria-controls='navLinks' ref={toggleButton} onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className='nav-links *:cursor-pointer' id='navLinks' ref={navLinks}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#work'>Our Work</a>
          </li>
          <li>
            <a href='#involved'>Get Involved</a>
          </li>
          <li>
            <a href='#impact'>Impact</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
