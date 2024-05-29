import Hero from "@/components/Homepage/Hero";
import { getHomePage } from "@/lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();
  const homepage = data.pages.edges[0].node.homepage;

  return (
    <>
      <Hero homepage={homepage} />
    </>
  );
}
