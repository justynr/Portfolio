import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0 auto;
  padding: 60px;
  display: flex;
  justify-self: end;
  justify-content: center;
  font-size: 26px;
  width: 816px;
  justify-content: space-between;
  font-weight: 400;
  a,
  button {
    /* padding: 1rem 3rem; */
    /* display: flex;
    align-items: center;
    position: relative;
    text-transform: capitalize;
    font-size: 30px; */
    background: none;
    border: 2;
    cursor: pointer;
    color: var(--fontBody);
    &:after {
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
    }
    &:hover,
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
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
