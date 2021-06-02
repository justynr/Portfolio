import Head from 'next/head';
import { getWorks } from '../../lib/api';
import CardSection from '../../components/CardSection';

export default function WorkPage({ allWorks }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Work</title>
      </Head>
      <CardSection allCards={allWorks} path="work" />
      <p>Work Page</p>
    </div>
  );
}
export async function getStaticProps() {
  const allWorks = await getWorks();
  return {
    props: {
      allWorks,
    },
  };
}
