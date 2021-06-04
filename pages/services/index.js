import Head from 'next/head';
import CardSection from '../../components/CardSection';
import { getAllServices } from '../../lib/api';

export default function ServicesPage({ allServices }) {
  return (
    <div>
      <Head>
        <title>Justyn Roy | Services</title>
      </Head>
      <CardSection allCards={allServices} path="services" />
    </div>
  );
}

export async function getStaticProps() {
  const allServices = await getAllServices();
  return {
    props: {
      allServices,
    },
  };
}
