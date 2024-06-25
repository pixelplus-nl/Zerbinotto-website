import { fetchAPI } from "./base";

export const getBrandsPage = async () => {
  const data = await fetchAPI(`
query brands {
  page(id: "11", idType: DATABASE_ID) {
    brandsOverview {
      title
      content
      content2
      cta{
        text
        buttonText
        buttonLink{
          url
        }
      }
      heroText
      brandsLogos {
        logo {
          sourceUrl
        }
      }
      content
      heroImg {
        sourceUrl
      }
      brands{
        img{
          sourceUrl
        }
        logo{
          sourceUrl
        }
        text
        button{
          buttonText
          buttonLink{
            url
          }
        }
      }
    }
  }
}`);
  return data;
};
