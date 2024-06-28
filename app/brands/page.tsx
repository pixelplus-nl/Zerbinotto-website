import { getBrandsPage } from "@/lib/getBrandsPage";
import Image from "next/image";
import { unbounded } from "@/app/fonts";
import BrandMarquee from "@/components/BrandMarquee";

export default async function page() {
  const data = await getBrandsPage();
  const dataBrandMarquee = data.page.brandsOverview;
  const unboundedFont = unbounded.className;

  console.log(unboundedFont);

  console.log(data.page.brandsOverview.content);

  return (
    <main>
      <section className="w-full flex items-end h-svh">
        <div className="relative w-full h-full">
          <Image
            src={data.page.brandsOverview.heroImg.sourceUrl}
            fill
            placeholder="blur"
            blurDataURL="data:..."
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
            alt={""}
          />
        </div>
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/50  w-full h-36"></div>
        <div className="absolute text-4xl md:text-5xl p-5 md:p-10 lg:px-14 text-white">
          <h1 className={`${unbounded.className} uppercase`}>
            {data.page.brandsOverview.title}
          </h1>
          <p className="font-thin text-xl mt-3 max-w-4xl">
            {data.page.brandsOverview.heroText}
          </p>
        </div>
      </section>
      <section>
        <BrandMarquee homepage={dataBrandMarquee} />

        <div
          className="[&>h2]:font-unbounded mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
          dangerouslySetInnerHTML={{
            __html: data.page.brandsOverview.content,
          }}></div>
      </section>
    </main>
  );
}
