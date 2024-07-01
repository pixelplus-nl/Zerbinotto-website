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
      content
      heroImg {
        sourceUrl
      }
      brands{
        brandName
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