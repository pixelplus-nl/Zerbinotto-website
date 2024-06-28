import { unbounded } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function NewsBlock(props: any) {
  return (
    <section className="py-20 px-5 md:px-10 lg:px-16 bg-[#AAB7AA]">
      <h2 className={`uppercase text-4xl mb-5 md:mb-10 ${unbounded.className}`}>
        <span className="font-bold">
          NEW IN
          <br />
        </span>
        YOUR BRANDSTORE
      </h2>
      <ol className="md:flex gap-5 md:gap-10">
        {props.news.slice(0, 2).map((post: any, index: number) => {
          return (
            <li className="mb-10 last:mb-0 md:w-80" key={index}>
              <Link href={`news/${post.node.slug}`} className="block group">
                <div className="w-full relative overflow-hidden h-52">
                  <Image
                    src={post.node.news.imgOverview.sourceUrl}
                    fill
                    placeholder="blur"
                    blurDataURL="data:..."
                    priority
                    sizes="100vw"
                    className="group-hover:scale-110 transition-all duration-500"
                    style={{
                      objectFit: "cover",
                    }}
                    alt={""}
                  />
                </div>
                <div className="max-w-[20rem]">
                  <label className="after:content-arrowRightIcon after:duration-500 after:ml-2 after:transition-all after:group-hover:translate-x-3 after:inline-block text-lg">
                    {post.node.title}
                  </label>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="group flex justify-end mt-10 md:mt-0 overflow-hidden relative">
        <div className="relative w-full">
          <Link
            className={`absolute justify-end h-full w-full top-0 right-0 flex items-center transition-all duration-700 -translate-y-10 group-hover:translate-y-0 md:justify-end gap-3 text-black uppercase ${unbounded.className}`}
            href={""}>
            Alle nieuwsitems
            <span>
              <HiOutlineArrowLongRight size="1.5rem" />
            </span>
          </Link>
          <Link
            className={`absolute justify-end h-full w-full top-0 right-0 flex items-center transition-all duration-700 group-hover:translate-y-10 md:justify-end gap-3 text-white uppercase ${unbounded.className}`}
            href={""}>
            Alle nieuwsitems
            <span>
              <HiOutlineArrowLongRight size="1.5rem" />
            </span>
          </Link>
          <div className="invisible h-full flex items-center gap-3 text-white uppercase">
            Alle nieuwsitems
            <span>
              <HiOutlineArrowLongRight size="1.5rem" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
