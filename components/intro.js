import styled from 'styled-components';

const IntroSection = styled.div`
  width: 536px;
  margin: 0 auto;
`;

const Name = styled.div`
  font-family: stolzl, sans-serif;
  letter-spacing: 10px;
  font-weight: 600;
  font-size: 75px;
  font-style: normal;
  text-align: center;
  color: var(--lightTheme);
  line-height: 1;
`;

const Tag = styled.div`
  font-weight: 400;
  font-size: 31px;
  font-style: normal;
  text-align: center;
  color: var(--lightTheme);
`;

export default function Intro({ homePage }) {
  return (
    <IntroSection>
      <Name>{homePage.name}</Name>
      <Tag>{homePage.tagline}</Tag>
    </IntroSection>
  );
}
