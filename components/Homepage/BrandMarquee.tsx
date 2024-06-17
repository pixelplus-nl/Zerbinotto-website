import Image from "next/image";

export default function BrandMarquee(props: any) {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 w-screen">
      <div className="relative flex overflow-x-hidden">
        <ul className=" flex items-center animate-marquee whitespace-nowrap">
          {props.homepage.brands.map((brand: any, index: number) => {
            return (
              <li key={index} className="w-20 md:w-32 mx-6 relative h-20">
                <Image
                  src={brand.logo.sourceUrl}
                  fill
                  priority
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    zIndex: -1,
                  }}
                  alt={""}
                />
              </li>
            );
          })}
        </ul>

        <ul className="absolute flex items-center top-0  animate-marquee2 whitespace-nowrap">
          {props.homepage.brands.map((brand: any, index: number) => {
            return (
              <li key={index} className="w-20 md:w-32 mx-6 relative h-20">
                <Image
                  src={brand.logo.sourceUrl}
                  fill
                  priority
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    zIndex: -1,
                  }}
                  alt={""}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
