import styled from 'styled-components';
import WorkCard from './WorkCard';

const WorkListStyles = styled.div``;

export default function WorkSection({ allWorks }) {
  console.log(allWorks);
  return (
    <WorkListStyles>
      {allWorks.map((work) => (
        <WorkCard work={work} key={work.id} />
      ))}
    </WorkListStyles>
  );
}
