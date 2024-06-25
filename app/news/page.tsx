import { getNewsPage, getPosts } from "@/lib/getNewsPage";
import Image from "next/image";
import { unbounded } from "../fonts";
import Link from "next/link";

export default async function page() {
  const data = await getNewsPage();
  const news = await getPosts();

  return (
    <main>
      <section className="w-full flex items-end h-svh">
        <div className="relative w-full h-full">
          <Image
            src={data.page.news_overview.heroImg.sourceUrl}
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
          <h1 className="uppercase">{data.page.news_overview.title}</h1>
          <h2 className="font-thin uppercase">
            {data.page.news_overview.subtitle}
          </h2>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0">
        <div
          className="py-10 lg:py-20 text-lg  lg:text-2xl"
          dangerouslySetInnerHTML={{ __html: data.page.news_overview.content }}
        />
        <div className="md:grid grid-cols-2 gap-10">
          {news.posts.edges.map((item: any, index: number) => {
            return (
              <Link
                className="group block
                 mb-10 last:mb-0"
                href={item.node.uri}>
                <div className="relative overflow-hidden h-72 mb-3">
                  <Image
                    className="group-hover:scale-110 duration-500 transition-all"
                    src={item.node.news.imgOverview.sourceUrl}
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
                <div className="max-w-[20rem]">
                  <label className="after:content-arrowRightIcon after:duration-500 after:ml-2 after:transition-all after:group-hover:translate-x-3 after:inline-block text-lg">
                    {item.node.title}
                  </label>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
