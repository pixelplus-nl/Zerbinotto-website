import { fetchAPI } from "./base";

export const getContactPage = async () => {
  const data = await fetchAPI(`
query Contact {
  page(id: "19", idType: DATABASE_ID) {
    contact {
      title
      subTitle
      heroImg {
        sourceUrl
      }
      adress
      publicTransport
      byCar
      content
      getInTouch
      openingHours {
        day
        closedAt
        openAt
      }
    }
  }
}`);
  return data;
};
