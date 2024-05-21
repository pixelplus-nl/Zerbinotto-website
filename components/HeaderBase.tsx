import { getNavigation } from "@/lib/getNavigation";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default async function HeaderBase() {
  const data = await getNavigation("dGVybToz");

  return (
    <>
      <HeaderMobile data={data} />
      <HeaderDesktop data={data} />
    </>
  );
}
