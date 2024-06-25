import { fetchAPI } from "./base";

export const getNewsPage = async () => {
  const data = await fetchAPI(`
    query NewsPage {
  page(id: "17", idType: DATABASE_ID) {
    news_overview {
      title
      subtitle
      heroImg{
        sourceUrl
      }
      content
    }
  }
}`);
  return data;
};

export const getPosts = async () => {
  const data = await fetchAPI(
    `query Posts {
  posts {
    edges {
      node {
        title
        uri
        news {
          imgOverview{
            sourceUrl
          }
        }
      }
    }
  }
}`
  );
  return data;
};
