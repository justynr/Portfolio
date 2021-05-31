import WorkCard from './WorkCard';

export default function WorkSection({ allWorks }) {
  console.log(allWorks);
  return (
    <div>
      {allWorks.map((work) => (
        <WorkCard work={work} key={work.id} />
      ))}
    </div>
  );
}
