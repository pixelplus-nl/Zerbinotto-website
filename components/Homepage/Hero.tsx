import Image from "next/image";
import { unbounded } from "@/app/fonts";

export default function Hero(props: any) {
  return (
    <section className="relative w-full lg:flex lg:h-screen">
      <div className="h-svh w-full lg:hidden">
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

      <div className="h-full w-7/12 relative hidden lg:block">
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
      </div>

      <div className="w-full h-[35rem] lg:w-5/12 md:h-[50rem] lg:h-[90%] relative">
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
        <div className="absolute hidden lg:block bottom-0 bg-gradient-to-t from-black w-full p-5 md:px-10 md:py-10">
          <div
            className={`flex items-center justify-between text-white text-xl ${unbounded.className}`}>
            <Image
              src="submark.svg"
              width={500}
              height={500}
              className="w-16"
              alt=""
            />
            <h1 className=" text-xl xl:text-2xl 2xl:text-3xl">
              BRANDSTORE FOR HIM <br />
              <span>MAASTRICHT - NL</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
