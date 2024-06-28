import { getAboutPage } from "@/lib/getAboutPage";
import Image from "next/image";
import { unbounded } from "@/app/fonts";
import { fetchPlaceReviews } from "@/lib/reviews";
import { MdStar } from "react-icons/md";
import Link from "next/link";

export default async function page() {
  const data = await getAboutPage();

  const reviews = await fetchPlaceReviews("ChIJy6-hV7jpwEcRW3rDZ-7Oe6Q");

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
        <div className="absolute text-4xl md:text-5xl p-5 md:p-10 lg:px-16  [&>h2]:font-unbounded text-white">
          <h1 className="uppercase">{data.page.about.title}</h1>
          <h2 className="font-thin uppercase">{data.page.about.subtitle}</h2>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0">
        <div className="py-10 lg:py-20 text-lg  lg:text-2xl">
          <p>{data.page.about.motto}</p>
        </div>
        <div
          className="[&>h2]:font-unbounded [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
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
            className="[&>h2]:font-unbounded my-10 mr-20 [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
            dangerouslySetInnerHTML={{ __html: data.page.about.content2 }}
          />
        </div>

        <div
          className="[&>h2]:font-unbounded my-10 [&>h2]:text-3xl mb-10 max-w-2xl [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase"
          dangerouslySetInnerHTML={{ __html: data.page.about.content3 }}
        />
      </section>
      <div className="bg-[#363636] flex justify-between  text-white px-5 md:px-10 py-10 lg:px-16">
        <div className="flex gap-5 items-center">
          <p className=" flex text-lg items-center gap-3">
            {reviews.result.rating}
            <span className="flex gap-1">
              {[...Array(Math.floor(reviews.result.rating) + 1)].map(
                (_, index) => (
                  <MdStar key={index} color="#FFBA00" />
                )
              )}
            </span>
          </p>
          <p className="font-thin">
            Gebaseerd op{" "}
            <Link
              className="underline hover:opacity-50 transition-all"
              href="https://www.google.com/search?q=zerbinotto+reviews&rlz=1C5CHFA_enNL899NL899&oq=zerbinotto+reviews+&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCggBEAAYgAQYogQyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg2MDIxajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x47c0e9b857a1afcb:0xa47bceee67c37a5b,1,,,,">
              {reviews.result.user_ratings_total}
            </Link>{" "}
            beoordelingen
          </p>
        </div>

        <div className="flex items-center gap-3">
          <p className="font-thin">powered by</p>
          <Image
            src="/googleLogo.svg"
            width={200}
            height={200}
            className="w-24"
            alt="google"
          />
        </div>
      </div>
    </main>
  );
}
