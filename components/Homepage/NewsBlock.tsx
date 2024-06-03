import { unbounded } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function NewsBlock(props: any) {
  return (
    <section className="py-20 px-5 bg-[#AAB7AA]">
      <h2 className={`uppercase text-4xl mb-5 ${unbounded.className}`}>
        <span className="font-bold">
          NEW IN
          <br />
        </span>
        YOUR BRANDSTORE
      </h2>
      {props.news.slice(0, 2).map((post: any, index: number) => {
        return (
          <Link
            href={`nieuws/${post.node.slug}`}
            className="mb-10 block last:mb-0"
            key={index}>
            <div className="w-full relative h-52">
              <Image
                src={post.node.news.imgOverview.sourceUrl}
                fill
                placeholder="blur"
                blurDataURL="data:..."
                priority
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt={""}
              />
            </div>
            <p className="flex items-center pt-5 pr-10">
              {post.node.title}
              <span>
                <HiOutlineArrowLongRight size="1.5rem" />
              </span>
            </p>
          </Link>
        );
      })}
      <Link
        className={`flex items-center gap-3 text-white uppercase ${unbounded.className}`}
        href={""}>
        Alle nieuwsitems
        <span>
          <HiOutlineArrowLongRight size="1.5rem" />
        </span>
      </Link>
    </section>
  );
}
