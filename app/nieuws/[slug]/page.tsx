import { getNewsPost } from "@/lib/getNewsPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

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
  console.log(getData);

  return (
    <div className="max-w-5xl py-32 relative mx-auto">
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

      <h1 className="">{getData.post.title}</h1>
    </div>
  );
}
