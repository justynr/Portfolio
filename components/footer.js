import styled from 'styled-components';
import Container from './container';
import SectionSeparator from './section-separator';

const FooterStyles = styled.footer`
  text-align: center;
  line-height: 1;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <SectionSeparator />
      <Container>
        <p>Website Design: Kristina Groeger</p>
        <p>Website Development: Justyn Roy</p>
      </Container>
      <SectionSeparator />
    </FooterStyles>
  );
}
