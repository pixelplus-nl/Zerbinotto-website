import { fetchAPI } from "./base";

export const getHomePage = async () => {
  const data = await fetchAPI(
    `query Home {
  pages(where: {id: 2}) {
    edges {
      node {
        title
      }
    }
  }
}`
  );
  return data;
};
