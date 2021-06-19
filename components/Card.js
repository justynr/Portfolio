import Link from 'next/link';
import { Image } from 'react-datocms';
import CoverImage from './cover-image';
import PostBody from './post-body';
import { CardContainer, Picture } from './styles/CardStyles';

function OddEven(position) {
  if (position % 2 === 0) {
    return 'odd';
  }
  return 'even';
}
function OddEvenText(position) {
  if (position % 2 === 0) {
    return 'text-left';
  }
  return 'text';
}
function topOrBottom(position, cardCount) {
  if (position === 1) {
    return 'topCardRight';
  }
  if (cardCount === position) {
    return 'bottomCard';
  }
}

const topPic = (position) => (position === 1 ? 'topCardLeft' : '');

export default function Card({ card, path, cardCount }) {
  const pos = OddEven(card.position);
  const textPos = OddEvenText(card.position);
  const firstOrLast = topOrBottom(card.position, cardCount);
  const firstPic = topPic(card.position);

  return (
    <CardContainer>
      <Link href={`/${path}/${card.slug}`}>
        <div className={`flex-container ${pos} ${firstOrLast}`}>
          <div className={`${textPos} ${firstOrLast}`}>
            <h2 className="home">
              {card.projectname}
              {firstOrLast}
            </h2>
            <PostBody classes="" content={card.description} />
          </div>
          <div>
            <Image
              title={card.projectname}
              alt={card.projectname}
              data={card.photo.responsiveImage}
              className={firstPic}
            />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}
