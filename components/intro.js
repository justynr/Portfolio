import styled from 'styled-components';

const IntroSection = styled.div`
  width: 536px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    width: 375px;
  }

  @media screen and (max-width: 320px) {
    width: 320px;
  }
`;

const Name = styled.div`
  font-family: stolzl, sans-serif;
  letter-spacing: 10px;
  font-weight: 600;
  font-size: 4.6rem;
  font-style: normal;
  text-align: center;
  color: var(--lightTheme);
  line-height: 1;

  @media screen and (max-width: 800px) {
    font-size: 3.4rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
  }
`;

const Tag = styled.div`
  font-weight: 400;
  font-size: 1.9rem;
  font-style: normal;
  text-align: center;
  color: var(--lightTheme);

  @media screen and (max-width: 800px) {
    font-size: 1.55rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 420px) {
    line-height: 30px;
  }
`;

export default function Intro({ homePage }) {
  return (
    <IntroSection>
      <Name>{homePage.name}</Name>
      <Tag>{homePage.tagline}</Tag>
    </IntroSection>
  );
}
