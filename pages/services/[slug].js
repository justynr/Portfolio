import Head from 'next/head';
import getAllServices from '../../lib/api';

export default function ServicesPage() {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Services</title>
      </Head>
      <p>Services Page</p>
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