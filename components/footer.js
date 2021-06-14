import styled from 'styled-components';
import SectionSeparator from './section-separator';

const FooterStyles = styled.footer`
  text-align: right;
  padding: 10px;
  line-height: 1;
`;

const FootContainer = styled.footer`
  text-align: right;
  font-size: 2px;
  line-height: 1;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <SectionSeparator />
      <FootContainer>
        {/* <p>Website Design: Kristina Groeger</p>
        <p>Website Development: Justyn Roy</p> */}
      </FootContainer>
      <SectionSeparator />
    </FooterStyles>
  );
}
