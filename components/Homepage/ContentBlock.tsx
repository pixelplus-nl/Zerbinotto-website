import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { unbounded } from "@/app/fonts";

export default function ContentBlock(props: any) {
  return (
    <section className="relative flex flex-col gap-5 px-5 py-12">
      <div className="relative h-16 w-16">
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
      <div
        className="contentBlock"
        dangerouslySetInnerHTML={{ __html: props.homepage.conBlock.content }}
      />
      <Link
        className={`bg-[#C14C23] py-5 rounded-3xl text-white uppercase flex gap-2 justify-center ${unbounded.className}`}
        href={props.homepage.conBlock.buttonLink.url}>
        {props.homepage.conBlock.buttonText}
        <span>
          <HiOutlineArrowLongRight size="1.5rem" />
        </span>
      </Link>
    </section>
  );
}
