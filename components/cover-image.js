import { Image } from 'react-datocms';
import cn from 'classnames';
import Link from 'next/link';

export default function CoverImage({ title, responsiveImage, slug }) {
  return (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
    />
  );
}
