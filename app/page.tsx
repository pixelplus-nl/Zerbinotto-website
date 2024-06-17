import ContentBlock from "@/components/Homepage/ContentBlock";
import BrandMarquee from "@/components/Homepage/BrandMarquee";
import BrandSlider from "@/components/Homepage/BrandSlider";
import Hero from "@/components/Homepage/Hero";
import { getHomePage } from "@/lib/getHomePage";
import NewsBlock from "@/components/Homepage/NewsBlock";
import { getNewsPosts } from "@/lib/getNewsPosts";
import ParallaxImgCollection from "@/components/ParallaxImgCollection";

export default async function Home() {
  const data = await getHomePage();
  const dataNews = await getNewsPosts();
  const homepage = data.pages.edges[0].node.homepage;
  const news = dataNews.posts.edges;

  return (
    <>
      <Hero homepage={homepage} />
      <BrandMarquee homepage={homepage} />
      <ParallaxImgCollection homepage={homepage} />
      <ContentBlock homepage={homepage} />
      <BrandSlider homepage={homepage} />
      <NewsBlock news={news} />
    </>
  );
}
