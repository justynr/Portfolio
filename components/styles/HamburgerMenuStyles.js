import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const HamburgerContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--darkTheme);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? '100%' : '0')};
  top: ${({ open }) => (open ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--bodyFont);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  padding: 10px;
  background: transparent;
  font-size: 40px;
  cursor: pointer;
  outline: none;
`;

export const NavLink = styled.div`
  color: var(--fontBody);
  display: flex;
  align-items: center;
  font-size: 46px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
    color: var(--lightTheme);
  }

  @media screen and (max-width: 800px) {
    font-size: 35px;
  }
`;

export const Buns = styled.div`
  display: flex;
  flex-direction: column;
`;
