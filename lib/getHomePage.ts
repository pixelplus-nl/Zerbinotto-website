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
          imgCol{
            imgHor{
              sourceUrl
            }
            imgVer{
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
        }
      }
    }
  }
}`
  );
  return data;
};
