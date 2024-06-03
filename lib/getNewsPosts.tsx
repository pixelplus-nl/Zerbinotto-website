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
