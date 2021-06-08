import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import { getWorkBySlug, getAllWorksWithSlug } from '../../lib/api';
import PostBody from '../../components/post-body';
import SectionSeparator from '../../components/section-separator';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Work({ work }) {
  return (
    <>
      <Head>
        <title>{`${CMS_NAME} | ${work.projectname}`}</title>
      </Head>
      <h1>{work.projectname}</h1>
      <CoverImage
        title={work.projectname}
        responsiveImage={work.photo.responsiveImage}
      />
      <p>{work.description}</p>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const work = await getWorkBySlug(params.slug, preview);
  return { props: { work } };
}

export async function getStaticPaths() {
  const allWorks = await getAllWorksWithSlug();
  return {
    paths: allWorks?.map((work) => `/work/${work.slug}`) || [],
    fallback: false,
  };
}
