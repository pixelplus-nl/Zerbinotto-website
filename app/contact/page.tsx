import { getContactPage } from "@/lib/getContactPage";
import Image from "next/image";
import { unbounded } from "../fonts";
import { getHomePage } from "@/lib/getHomePage";
import GoogleMap from "@/components/Contact/GoogleMap";
import { fetchPlaceReviews } from "@/lib/reviews";
import Link from "next/link";
import { MdStar } from "react-icons/md";
const apiKey = process.env.GOOGLE_API_ENDPOINT;

export default async function contact() {
  const data = await getContactPage();
  const attention = await getHomePage();
  const reviews = await fetchPlaceReviews("ChIJy6-hV7jpwEcRW3rDZ-7Oe6Q");

  return (
    <main>
      <section className="w-full flex items-end h-svh">
        <div className="relative w-full h-full">
          <Image
            src={data.page.contact.heroImg.sourceUrl}
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
        <div
          className={`absolute text-4xl ${unbounded.className} uppercase md:text-5xl p-5 md:p-10 lg:px-14 text-white`}>
          <h1>{data.page.contact.title}</h1>
          <h2 className="font-thin mt-3 ">{data.page.contact.subTitle}</h2>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 md:px-10 lg:px-0">
        <div
          className="[&>h2]:font-unbounded  text-lg lg:text-2xl [&>h2]:text-3xl [&>p]:max-w-2xl  w-full  py-12 md:py-20 lg:py-28  [&>h2]:mb-3 [&>h2]:font-semibold [&>h2]:uppercase contentBlock "
          dangerouslySetInnerHTML={{
            __html: data.page.contact.content,
          }}></div>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-unbounded mb-2 uppercase text-lg lg:text-2xl font-semibold">
                Adres
              </h3>
              <div
                className="max-w-[15rem] contentBlock"
                dangerouslySetInnerHTML={{
                  __html: data.page.contact.adress,
                }}></div>
            </div>
            <div>
              <h3 className="font-unbounded mb-2 uppercase text-lg lg:text-2xl font-semibold">
                met de auto
              </h3>
              <div
                className="max-w-[15rem] contentBlock"
                dangerouslySetInnerHTML={{
                  __html: data.page.contact.byCar,
                }}></div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-unbounded mb-2 uppercase text-lg lg:text-2xl font-semibold">
                get in touch
              </h3>
              <div
                className="max-w-[15rem] contentBlock"
                dangerouslySetInnerHTML={{
                  __html: data.page.contact.getInTouch,
                }}></div>
            </div>
            <div>
              <h3 className="font-unbounded mb-2 uppercase text-lg lg:text-2xl font-semibold">
                kom je met ov?
              </h3>
              <div
                className="max-w-[15rem] contentBlock"
                dangerouslySetInnerHTML={{
                  __html: data.page.contact.publicTransport,
                }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-unbounded mb-2 uppercase text-lg lg:text-2xl font-semibold">
              Openingstijden
            </h3>
            <div className="flex max-w-[12rem]">
              <ul className="flex-grow">
                {data.page.contact.openingHours.map(
                  (item: any, index: number) => {
                    return (
                      <li key={index}>
                        <p>{item.day}</p>
                      </li>
                    );
                  }
                )}
              </ul>
              <ul className="">
                {data.page.contact.openingHours.map(
                  (item: any, index: number) => {
                    return (
                      <li key={index} className="flex">
                        <p className="flex-grow">{item.openAt}</p>
                      </li>
                    );
                  }
                )}
              </ul>
              <ul>
                {data.page.contact.openingHours.map((index: number) => {
                  return (
                    <li key={index} className="mx-5">
                      <p> - </p>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {data.page.contact.openingHours.map(
                  (item: any, index: number) => {
                    return (
                      <li key={index} className="flex">
                        <p className="flex-grow">{item.closedAt}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3
            className={`uppercase mb-2 text-lg lg:text-2xl font-bold ${unbounded.className}`}>
            Let op!
          </h3>
          <p>{attention.pages.edges[0].node.homepage.footeralert}</p>
        </div>

        <div className="my-10 shadow-xl">
          <GoogleMap apiKey={apiKey} />
        </div>
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
