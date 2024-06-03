import Image from "next/image";

export default function imgCol(props: any) {
  return (
    <section className="relative py-12">
      <div className="w-screen gap-3 flex px-5">
        <div className="w-1/2 flex items-start relative">
          <Image
            src={props.homepage.imgCol.imgHor.sourceUrl}
            placeholder="blur"
            blurDataURL="data:..."
            width={300}
            height={300}
            alt={""}
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={props.homepage.imgCol.imgVer.sourceUrl}
            placeholder="blur"
            blurDataURL="data:..."
            sizes="100vw"
            width={300}
            height={300}
            alt={""}
          />
        </div>
      </div>
    </section>
  );
}
