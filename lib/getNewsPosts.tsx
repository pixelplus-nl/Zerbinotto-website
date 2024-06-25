import { fetchAPI } from "./base";

export const getNewsPosts = async () => {
  const data = await fetchAPI(
    `query NewsPosts {
  posts {
    edges {
      node {
        news {
          imgOverview {
            sourceUrl
          }
          content
          cta {
            buttonText
            buttonlink {
              url
            }
          }
          heroImgDetail{
            sourceUrl
          }
        }
        title
        slug
      }
    }
  }
}`
  );
  return data;
};

export const getNewsPost = async (slug: string) => {
  const data = await fetchAPI(
    `query NewsPost {
  post(id: "nieuws/${slug}", idType: URI) {
    slug
    title
    news {
          imgOverview {
            sourceUrl
          }
          content
          cta {
            buttonText
            buttonlink {
              url
            }
          }
          heroImgDetail{
            sourceUrl
          }
        }
        title
        slug
    		seo{
      		title
      		metaDesc
    		}
      }
  }
`
  );
  return data;
};
