import Image from "next/image";
import Button from "../button";

export default function Brands(props: any) {
  return (
    <div>
      <div className="relative md:flex items-center w-full h-svh lg:h-[50rem]">
        <Image
          src={props.brand.img.sourceUrl}
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
          className="hidden md:block"
        />
        <Image
          src={props.brand.img.sourceUrl}
          placeholder="blur"
          blurDataURL="data:..."
          priority
          width={1000}
          height={1000}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          alt={""}
          className="h-1/2 w-full md:hidden"
        />
        <div className="bg-white px-10 py-16 relative md:w-[30%] h-auto md:absolute z-20  md:right-20">
          <div className="h-24 mb-10 relative">
            <Image
              src={props.brand.logo.sourceUrl}
              fill
              placeholder="blur"
              blurDataURL="data:..."
              priority
              sizes="100vw"
              style={{
                objectFit: "contain",
                zIndex: -1,
              }}
              alt={props.brand.brandName}
              title={props.brand.brandName}
            />
          </div>
          <div className="px-5">
            <div className="mb-10">
              <h3 className="font-semibold inline text-lg">
                {props.brand.brandName}
              </h3>
              <p className="inline text-lg font-light"> {props.brand.text}</p>
            </div>
            <Button
              color="bg-[#6A726A] ring-[#6A726A] px-5"
              buttonLink={props.brand.button.buttonLink}
              buttonText={props.brand.button.buttonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
