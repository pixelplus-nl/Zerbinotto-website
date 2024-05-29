import { fetchAPI } from "./base";

export const getHomePage = async () => {
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
      }
    }
  }
}`
  );
  return data;
};
