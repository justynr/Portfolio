import markdownToHtml from '@/lib/markdownToHtml';
import Head from 'next/head';
import About from '../components/About';
import { getAboutMe } from '../lib/api';

export default function AboutPage({ about, content }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | About</title>
      </Head>
      <About about={about} content={content} />
    </div>
  );
}

export async function getStaticProps() {
  const about = await getAboutMe();
  const content = await markdownToHtml(about?.bio || '');
  return { props: { about, content } };
}
