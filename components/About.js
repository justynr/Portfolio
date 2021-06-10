import styled from 'styled-components';
import { Image } from 'react-datocms';
import CoverImage from './cover-image';
import SectionSeparator from './section-separator';
import PostBody from './post-body';

const AboutStyles = styled.div`
  line-height: 1.5;
  padding-top: 25px;

  h1 {
    color: var(--lightTheme);
  }
  .picture {
    height: auto;
    width: 50%;
  }
  .body {
    background-color: var(--darkTheme);
    color: var(--lightTheme);
    margin: -10rem;
    padding: 8rem;
    padding-bottom: 5rem;
  }
`;

export default function About({ about, content }) {
  const { responsiveImage } = about.photo;
  return (
    <AboutStyles>
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${about.name}`,
        }}
        className="picture"
      />
      <h1>{about.name}</h1>
      <div className="body">
        <PostBody content={content} />
      </div>
    </AboutStyles>
  );
}
