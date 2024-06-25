import { fetchAPI } from "./base";

export const getAboutPage = async () => {
  const data = await fetchAPI(`
query About {
  page(id: "13", idType: DATABASE_ID) {
    about {
      title
      subtitle
      motto
      heroImg {
        sourceUrl
      }
      img {
        sourceUrl
      }
      content1
      content3
      content2
    }
  }
}`);
  return data;
};
