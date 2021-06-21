import styled from 'styled-components';
import Card from './Card';

const CardSectionStyles = styled.div``;

export default function WorkSection({ allCards, path }) {
  const allCardsCount = allCards.length;
  return (
    <CardSectionStyles>
      {allCards.map((card) => (
        <Card card={card} path={path} key={card.id} cardCount={allCardsCount} />
      ))}
    </CardSectionStyles>
  );
}
