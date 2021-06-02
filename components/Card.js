import Link from 'next/link';
import CoverImage from './cover-image';
import PostBody from './post-body';
import CardContainer from './styles/CardStyles';

function OddEven(position) {
  if (position % 2 === 0) {
    return 'odd';
  }
  return 'even';
}

export default function Card({ card }, path) {
  const pos = OddEven(card.position);

  return (
    <CardContainer>
      <Link href={`/${path}/${card.slug}`}>
        <div className={`flex-container ${pos}`}>
          <div className="text">
            <h2>{card.projectname}</h2>
            <PostBody content={card.description} />
          </div>
          <div>
            <CoverImage
              title={card.projectname}
              responsiveImage={card.photo.responsiveImage}
            />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}
