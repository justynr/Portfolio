import Link from 'next/link';
import {
  CloseIcon,
  HamburgerContainer,
  Icon,
  NavLink,
  Buns,
} from './styles/HamburgerMenuStyles';

export default function HamburgerMenu() {
  return (
    <HamburgerContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <Buns>
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
      </Buns>
    </HamburgerContainer>
  );
}
