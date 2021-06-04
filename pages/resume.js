import Head from 'next/head';
import { getResume } from '../lib/api';

export default function ResumePage({ resDoc }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Resume</title>
      </Head>
      <p>Resume Page</p>
    </div>
  );
}

export async function getStaticProps() {
  const resDoc = await getResume();
  return {
    props: {
      resDoc,
    },
  };
}
