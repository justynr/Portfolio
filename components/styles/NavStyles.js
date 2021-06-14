import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const NavStyles = styled.nav`
  margin: 0 auto;
  padding: 60px 0px;
  display: flex;
  justify-content: space-between;
  width: 816px;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: auto;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 816px;

  @media screen and (max-width: 800px) {
    display: none;
    width: auto;
  }
`;

export const NavLink = styled.div`
  color: var(--fontBody);
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--lightTheme);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--fontBody);
  font-size: 30px;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);

    cursor: pointer;
  }
`;

/* &:after {
    height: 2px;
    background: var(--lightTheme);
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 2rem;
  } */
/* &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
    &:after {
      width: calc(100% - 60px);
    }
    @media (max-width: 700px) {
      width: calc(100% - 10px);
    }
  }

  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center; 
  } */
