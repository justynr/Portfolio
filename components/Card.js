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

function bottText(position, cardCount) {
  if (position === cardCount && position % 2 === 0) return 'bottTextLeft';
  if (position === cardCount && position % 2 === 1) return 'bottTextRight';
}
function bottPic(position, cardCount) {
  if (position === cardCount && position % 2 === 1) return 'bottPicLeft';
  if (position === cardCount && position % 2 === 0) return 'bottPicRight';
}

const topText = (position) => (position === 1 ? 'topCardRight' : '');
const topPic = (position) => (position === 1 ? 'topCardLeft' : '');

export default function Card({ card, path, cardCount }) {
  const pos = OddEven(card.position);
  const textPos = OddEvenText(card.position);
  const firstText = topText(card.position, cardCount);
  const lastText = bottText(card.position, cardCount);

  const firstPic = topPic(card.position);
  const lastPic = bottPic(card.position, cardCount);

  return (
    <CardContainer>
      <Link href={`/${path}/${card.slug}`}>
        <div className={`flex-container ${pos} `}>
          <div className={`${textPos} ${firstText} ${lastText}`}>
            <h2 className="home">{card.projectname}</h2>
            <PostBody classes="" content={card.description} />
          </div>
          <div>
            <Image
              title={card.projectname}
              alt={card.projectname}
              data={card.photo.responsiveImage}
              className={`${firstPic} ${lastPic}`}
            />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}
