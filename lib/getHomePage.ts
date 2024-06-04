import { fetchAPI } from "./base";

export const getHomePage = async () => {
  const data = await fetchAPI(
    `query NewQuery {
  pages(where: {id: 2}) {
    edges {
      node{
        homepage{
          heroImgBig{
            sourceUrl
          }
          heroLinkBig{
            url
          }
          heroImgSmall{
            sourceUrl
          }
          heroLinkSmall{
            url
          }
          imgcol {
            img{
              sourceUrl
            }
          }
          conBlock{
            content
            buttonText
            buttonLink{
              url
            }
          }
          brands{
            logo{
              sourceUrl
            }
          }
          brandSlider{
            brandname
            img{
              sourceUrl
            }
            logo{
              sourceUrl
            }
            paragraph
            ctaButton{
              buttonlink{
                url
              }
              buttontext
            }
          }
          footeralert
        }
      }
    }
  }
}`
  );
  return data;
};
