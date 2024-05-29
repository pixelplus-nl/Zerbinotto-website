import Image from "next/image";
import { unbounded } from "@/app/fonts";

export default function Hero(props: any) {
  return (
    <section className="w-full relative h-screen">
      <div className="relative h-[90%] w-full">
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
        <div className="absolute bottom-0 bg-gradient-to-t from-black w-full p-5">
          <div
            className={`flex items-center justify-between text-white text-xl ${unbounded.className}`}>
            <Image
              src="submark.svg"
              width={500}
              height={500}
              className="w-12"
              alt=""
            />
            <h1>
              BRANDSTORE FOR HIM <br />
              <span>MAASTRICHT - NL</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 relative">
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
