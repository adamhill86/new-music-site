import { Link } from 'gatsby';
import React from 'react';
import styles from './header-menu.module.scss';

const HeaderMenu: React.FC<{ links: any[] }> = ({ links }) => (
  <nav>
    {links.map(link => (
      <Link to={link.href} className={styles.link} activeClassName={styles.active} key={link.text}>
        {link.text}
      </Link>
    ))}
  </nav>
);

export default HeaderMenu;
