import Head from 'next/head';
import CoverImage from '../../components/cover-image';
import { getAllServicesWithSlug, getServiceBySlug } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';

export default function Work({ service }) {
  // console.log(service);
  return (
    <>
      <Head>
        <title>{`${CMS_NAME} | ${service.projectname}`}</title>
      </Head>
      <h1>{service.projectname}</h1>
      <CoverImage
        title={service.projectname}
        responsiveImage={service.photo.responsiveImage}
      />
      <p>{service.description}</p>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const service = await getServiceBySlug(params.slug, preview);
  // console.log(service);
  return { props: { service } };
}

export async function getStaticPaths() {
  const allServices = await getAllServicesWithSlug();
  // console.log(allServices);
  return {
    paths: allServices?.map((service) => `/services/${service.slug}`) || [],
    fallback: false,
  };
}
