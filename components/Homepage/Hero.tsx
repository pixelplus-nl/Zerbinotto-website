import Image from "next/image";
import { unbounded } from "@/app/fonts";

export default function Hero(props: any) {
  return (
    <section className="relative w-full">
      <div className="h-svh w-full">
        <div className="h-full w-full relative">
          <Image
            src={props.homepage.heroImgBig.sourceUrl}
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
          <div className="absolute bottom-0 bg-gradient-to-t from-black w-full p-5 md:px-10 md:py-10">
            <div
              className={`flex items-center justify-between text-white text-xl ${unbounded.className}`}>
              <Image
                src="submark.svg"
                width={500}
                height={500}
                className="w-12 md:w-16"
                alt=""
              />
              <h1 className="md:text-4xl">
                BRANDSTORE FOR HIM <br />
                <span>MAASTRICHT - NL</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[35rem] md:h-[50rem] relative">
        <Image
          src={props.homepage.heroImgSmall.sourceUrl}
          fill
          placeholder="blur"
          blurDataURL="data:..."
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
            objectPosition: "left",
          }}
          alt={""}
        />
      </div>
    </section>
  );
}
