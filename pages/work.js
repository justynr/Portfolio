import Head from 'next/head';

export default function WorkPage({ allWork }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Work</title>
      </Head>
      <p>Work Page</p>
    </div>
  );
}
export async function getStaticProps() {
  const data = await getWorks();
  return {
    props: {
      allWork: {
        ...data,
      },
    },
  };
}
