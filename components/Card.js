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

export default function Card({ card, path }) {
  const pos = OddEven(card.position);
  const textPos = OddEvenText(card.position);

  return (
    <CardContainer>
      <Link href={`/${path}/${card.slug}`}>
        <div className={`flex-container ${pos}`}>
          <div className={textPos}>
            <h2 className="home">{card.projectname}</h2>
            <PostBody classes="" content={card.description} />
          </div>
          <div>
            <Image
              title={card.projectname}
              alt={card.projectname}
              data={card.photo.responsiveImage}
              height="543px"
            />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}
