import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HamburgerMenu from './hamburger-menu/hamburger-menu';
import HeaderMenu from './header-menu/header-menu';
import styles from './header.module.scss';

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/music',
    text: 'Music',
  },
  {
    href: '/shows',
    text: 'Shows',
  },
  {
    href: '/news',
    text: 'News',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
  {
    href: '/bio',
    text: 'Bio',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
];

// const eventEmitter = new EventEmitter();
// export const HeaderContext = React.createContext(eventEmitter);

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // eventEmitter.subscribe('menuToggled', (isMenuOpen: boolean) => {
  //   // console.log(isMenuOpen);
  //   setMenuOpen(isMenuOpen);
  // });

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.linkList}>
          {links.map(link => (
            <Link to={link.href} className={styles.link} activeClassName={styles.active} key={link.text}>
              {link.text}
            </Link>
          ))}
        </nav>
        <div className={styles.menu}>
          <HamburgerMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </header>
      {isMenuOpen && <HeaderMenu links={links} />}
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
