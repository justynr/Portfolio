const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `,
    { preview }
  );
  return data?.allPosts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}

export async function getHomePage() {
  const data = await fetchAPI(
    `query {
      home {
        id
        name
        tagline
      }
    }
    `
  );
  return data?.home;
}

export async function getWorks() {
  const data = await fetchAPI(
    `query {
      allWorks {
        id
        position
        projectname
        slug
        date
        description
        photo {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 670 }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
    `
  );
  return data?.allWorks;
}

export async function getWorkBySlug(slug, preview) {
  const data = await fetchAPI(
    `
  query WorkBySlug($slug: String) {
    work(filter: {slug: {eq: $slug}}) {
      date
      description
      id
      projectname
      slug
      ogImage: photo{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      photo {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data?.work;
}

export async function getAllWorksWithSlug() {
  const data = await fetchAPI(` 
  query {
    allWorks {
      slug
    }
  }
  `);
  return data?.allWorks;
}

export async function getAboutMe() {
  const data = await fetchAPI(
    `query {
      aboutme {
        bio
        name    
        photo {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
    `
  );
  return data?.aboutme;
}

export async function getAllServices() {
  const data = await fetchAPI(
    `query {
      allServices {
        id
        slug
        title
        position
        description(markdown: true) 
        photo {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1340 }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
    `
  );
  return data?.allServices;
}

export async function getAllServicesWithSlug() {
  const data = await fetchAPI(` 
  query {
    allServices {
      slug
    }
  }
  `);
  return data?.allServices;
}

export async function getResume() {
  const data = await fetchAPI(
    `query {
      resume {
        id
        cvText(markdown: false)
      }
    }`
  );
  console.log(data);
  return data?.resume;
}

export async function getServiceBySlug(slug, preview) {
  const data = await fetchAPI(
    `
  query ServiceBySlug($slug: String) {
    service(filter: {slug: {eq: $slug}}) {
      description
      id
      title
      ogImage: photo{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      photo {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  // console.log(data);
  return data?.service;
}
