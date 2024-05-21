import { getHomePage } from "@/lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();

  return <h1>{data.pages.edges[0].node.title}</h1>;
}
