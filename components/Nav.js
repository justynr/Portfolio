import Link from 'next/link';
import styled from 'styled-components';
import { HamburgerContainer } from './styles/HamburgerMenuStyles';
import { useMenu } from '../lib/menuState';

import { NavStyles, NavLink, Bars, NavMenu } from './styles/NavStyles';

export default function Nav() {
  const { openMenu } = useMenu();
  return (
    <NavStyles>
      <Bars type="button" onClick={openMenu} />
      <NavMenu>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/work">
          <NavLink>Work</NavLink>
        </Link>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
        <Link href="/services">
          <NavLink>Services</NavLink>
        </Link>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link href="/resume">
          <NavLink>Resume</NavLink>
        </Link>
      </NavMenu>
    </NavStyles>
  );
}
