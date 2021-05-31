import { getWorks } from '@/lib/api';
import Head from 'next/head';
import WorkSection from '../../components/WorkSection';

export default function WorkPage({ allWorks }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Work</title>
      </Head>
      <WorkSection allWorks={allWorks} />
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
