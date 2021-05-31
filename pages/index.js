import Head from 'next/head';
import WorkSection from '../components/WorkSection';
import SectionSeparator from '../components/section-separator';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';

import { getAllPostsForHome, getHomePage, getWorks } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Container from '../components/container';

export default function Index({ allPosts, homePage, allWorks }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Intro homePage={homePage} />
        <SectionSeparator />
        <WorkSection allWorks={allWorks} />
      </Container>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  const homePage = await getHomePage();
  const allWorks = await getWorks();
  return {
    props: { allPosts, homePage, allWorks },
  };
}

/*
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
*/
