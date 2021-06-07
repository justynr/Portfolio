import styled from 'styled-components';
import Card from './Card';

const CardSectionStyles = styled.div``;

export default function WorkSection({ allCards, path }) {
  return (
    <CardSectionStyles>
      {allCards.map((card) => (
        <Card card={card} path={path} key={card.id} />
      ))}
    </CardSectionStyles>
  );
}
