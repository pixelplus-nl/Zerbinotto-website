import Image from "next/image";

export default function BrandMarquee(props: any) {
  return (
    <section className="relative w-screen">
      <div className="relative flex overflow-x-hidden">
        <ul className="py-12 flex items-center animate-marquee whitespace-nowrap">
          {props.homepage.brands.map((brand: any, index: number) => {
            return (
              <li key={index} className="w-20 mx-6 relative h-20">
                <Image
                  src={brand.logo.sourceUrl}
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
              </li>
            );
          })}
        </ul>

        <ul className="absolute flex items-center top-0 py-12 animate-marquee2 whitespace-nowrap">
          {props.homepage.brands.map((brand: any, index: number) => {
            return (
              <li key={index} className="w-20 mx-6 relative h-20">
                <Image
                  src={brand.logo.sourceUrl}
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
