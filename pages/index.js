import Head from 'next/head';
import CardSection from '../components/CardSection';
import SectionSeparator from '../components/section-separator';
import Intro from '../components/intro';

import { getHomePage, getWorks } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({ homePage, allWorks }) {
  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <>
        <Intro homePage={homePage} />
        <SectionSeparator />
        <CardSection allCards={allWorks} path="work" />
      </>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const homePage = await getHomePage();
  const allWorks = await getWorks();
  return {
    props: { homePage, allWorks },
  };
}
