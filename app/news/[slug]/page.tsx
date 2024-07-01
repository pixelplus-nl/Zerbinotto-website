import { getNewsPost } from "@/lib/getNewsPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { unbounded } from "@/app/fonts";
import Link from "next/link";
import Button from "@/components/button";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const getData = await getNewsPost(params.slug);

  if (getData.newsPost === null) {
    notFound();
  }

  const post = getData.post.seo;

  return {
    title: `${post.title}`,
    description: `${post.metaDesc}`,
  };
}

export default async function page({ params }: PageProps) {
  const getData = await getNewsPost(params.slug);


  return (
    <section className="max-w-5xl lg:py-32 pb-20 relative mx-auto">
      <div className="w-full h-[35rem] relative">
        <Image
          src={getData.post.news.heroImgDetail.sourceUrl}
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

      <div className="px-5">
        <h1 className={`${unbounded.className} text-3xl py-10`}>
          {getData.post.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: getData.post.news.content }}></div>
        <div className="w-fit">
          <Button
            color="bg-[#C14C23] ring-[#C14C23] px-5"
            buttonText={getData.post.news.cta.buttonText}
            buttonLink={getData.post.news.cta.buttonlink}
          />
        </div>
      </div>
    </section>
  );
}
