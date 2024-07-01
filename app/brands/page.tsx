import { getBrandsPage } from "@/lib/getBrandsPage";
import Image from "next/image";
import { unbounded } from "@/app/fonts";
import BrandMarquee from "@/components/BrandMarquee";
import Brands from "@/components/Brands/Brands";
import React from "react";
import Button from "@/components/button";

export default async function page() {
  const data = await getBrandsPage();
  const dataBrandMarquee = data.page.brandsOverview;

  console.log(data.page.brandsOverview.cta.buttonLink.url);

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
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/50  w-full h-80 lg:h-36"></div>
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
          className="[&>h2]:font-unbounded px-5 md:px-10  [&>h2]:text-3xl [&>p]:max-w-2xl max-w-5xl w-full  mb-12 md:mb-20 lg:mb-28 mx-auto [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
          dangerouslySetInnerHTML={{
            __html: data.page.brandsOverview.content,
          }}></div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        {data.page.brandsOverview.brands.map((brand: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Brands brand={brand} />
            </React.Fragment>
          );
        })}
      </section>
      <section className="px-5 md:px-10 max-w-5xl pb-12 md:pb-20 lg:pb-28 mx-auto">
        <div
          className="[&>h2]:font-unbounded  [&>h2]:text-3xl [&>p]:max-w-2xl  w-full  [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
          dangerouslySetInnerHTML={{
            __html: data.page.brandsOverview.content2,
          }}></div>
        <Button
          color="w-fit ring-[#6A726A] bg-[#6A726A]"
          buttonLink={data.page.brandsOverview.cta.buttonLink}
          buttonText={data.page.brandsOverview.cta.buttonText}
        />
      </section>
    </main>
  );
}
