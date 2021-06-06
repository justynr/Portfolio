import {
  CloseIcon,
  HamburgerContainer,
  Icon,
} from './styles/HamburgerMenuStyles';

export default function HamburgerMenu() {
  return (
    <HamburgerContainer>
      <CloseIcon />
      <Icon>
        <CloseIcon />
      </Icon>
    </HamburgerContainer>
  );
}
