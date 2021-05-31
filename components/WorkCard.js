import styled from 'styled-components';
import Link from 'next/link';
import CoverImage from './cover-image';

const CardContainer = styled.div`
  .flex-container {
    cursor: pointer;
    display: flex;
  }
  .odd {
    flex-direction: row;
  }
  .even {
    flex-direction: row-reverse;
  }
  .flex-container > div {
    /* width: 500px; */
    flex-basis: 50%;
  }
  .text {
    background-color: var(--darkTheme);
    padding: 1rem 2rem;
  }
`;

function OddEven(position) {
  if (position % 2 === 0) {
    return 'odd';
  }
  return 'even';
}

export default function WorkCard({ work }) {
  const pos = OddEven(work.position);

  return (
    <CardContainer>
      <Link href={`/work/${work.slug}`}>
        <div className={`flex-container ${pos}`}>
          <div className="text">
            <h2>{work.projectname}</h2>
            <p>{work.description}</p>
          </div>
          <div>
            <CoverImage
              title={work.projectname}
              responsiveImage={work.photo.responsiveImage}
            />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}
