import styled from 'styled-components';
import Card from './Card';

const WorkListStyles = styled.div``;

export default function WorkSection({ allWorks }) {
  return (
    <WorkListStyles>
      {allWorks.map((work) => (
        <Card card={work} path="work" key={work.id} />
      ))}
    </WorkListStyles>
  );
}
