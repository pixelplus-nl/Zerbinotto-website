import { getAboutPage } from "@/lib/getAboutPage";
import Image from "next/image";
import { unbounded } from "../fonts";
import { useEffect, useState } from "react";
import { fetchPlaceReviews } from "@/lib/reviews";

export default async function page() {
  const data = await getAboutPage();

  const reviews = await fetchPlaceReviews("ChIJlZnqV7jpwEcRjjAXmNzMxHE");

  console.log(reviews);

  return (
    <main>
      <section className="w-full flex items-end h-svh">
        <div className="relative w-full h-full">
          <Image
            src={data.page.about.heroImg.sourceUrl}
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
        <div
          className={`absolute text-4xl md:text-5xl p-5 md:p-10  ${unbounded.className} text-white`}>
          <h1 className="uppercase">{data.page.about.title}</h1>
          <h2 className="font-thin uppercase">{data.page.about.subtitle}</h2>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0">
        <div className="py-10 lg:py-20 text-lg  lg:text-2xl">
          <p>{data.page.about.motto}</p>
        </div>
        <div
          className={`[&>h2]:${unbounded.className} [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase`}
          dangerouslySetInnerHTML={{ __html: data.page.about.content1 }}
        />

        <Image
          src={data.page.about.img.sourceUrl}
          width={1000}
          height={1000}
          alt="store image"
          title="store image"
        />

        <div className="flex w-full justify-end ">
          <div
            className={`[&>h2]:${unbounded.className} my-10 mr-20 [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase`}
            dangerouslySetInnerHTML={{ __html: data.page.about.content2 }}
          />
        </div>

        <div
          className={`[&>h2]:${unbounded.className} my-10 [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase`}
          dangerouslySetInnerHTML={{ __html: data.page.about.content3 }}
        />
      </section>
    </main>
  );
}
