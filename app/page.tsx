import { getHomePage } from "@/lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();

  return <h1></h1>;
}
