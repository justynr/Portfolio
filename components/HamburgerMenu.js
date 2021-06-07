import Link from 'next/link';
import {
  CloseIcon,
  HamburgerContainer,
  Icon,
  NavLink,
  Buns,
} from './styles/HamburgerMenuStyles';
import { useMenu } from '../lib/menuState';

export default function HamburgerMenu() {
  const { closeMenu, menuOpen } = useMenu();
  return (
    <HamburgerContainer open={menuOpen}>
      <Icon type="button" onClick={closeMenu}>
        <CloseIcon />
      </Icon>
      <Buns>
        <Link href="/">
          <NavLink onClick={closeMenu}>Home</NavLink>
        </Link>
        <Link href="/work">
          <NavLink onClick={closeMenu}>Work</NavLink>
        </Link>
        <Link href="/contact">
          <NavLink onClick={closeMenu}>Contact</NavLink>
        </Link>
        <Link href="/services">
          <NavLink onClick={closeMenu}>Services</NavLink>
        </Link>
        <Link href="/about">
          <NavLink onClick={closeMenu}>About</NavLink>
        </Link>
        <Link href="/resume">
          <NavLink onClick={closeMenu}>Resume</NavLink>
        </Link>
      </Buns>
    </HamburgerContainer>
  );
}
