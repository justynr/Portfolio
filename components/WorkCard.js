import styled from 'styled-components';
import Link from 'next/link';
import CoverImage from './cover-image';
import CardStyles from './styles/CardStyles';

function OddEven(position) {
  if (position % 2 === 0) {
    return 'odd';
  }
  return 'even';
}

export default function WorkCard({ work }) {
  const pos = OddEven(work.position);

  return (
    <CardStyles>
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
    </CardStyles>
  );
}
