import Image from "next/image";
import Button from "../button";

export default function ContentBlock(props: any) {
  return (
    <section className="relative justify-center md:gap-8 flex flex-col md:flex-row gap-5 px-5 py-12 md:py-20 lg:py-28">
      <div className="relative h-16 w-16 md:w-28 md:h-28">
        <Image
          src="submarkBlack.svg"
          fill
          placeholder="blur"
          blurDataURL="data:..."
          priority
          sizes="100vw"
          style={{
            objectFit: "contain",
            zIndex: -1,
          }}
          alt={""}
        />
      </div>
      <div className="max-w-sm">
        <div
          className="contentBlock md:text-xl"
          dangerouslySetInnerHTML={{ __html: props.homepage.conBlock.content }}
        />
        <Button
          color="#C14C23"
          homepage={props.homepage}
          buttonText={props.homepage.conBlock.buttonText}
          buttonLink={props.homepage.conBlock.buttonLink}
        />
      </div>
    </section>
  );
}
