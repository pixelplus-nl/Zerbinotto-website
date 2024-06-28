"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Brand {
  logo: {
    sourceUrl: string;
  };
}

export default function BrandMarquee(props: { homepage: { brands: Brand[] } }) {
  const [items, setItems] = useState<Brand[]>([]);

  useEffect(() => {
    const itemWidth = 200;
    const screenWidth = window.innerWidth;
    const totalWidthNeeded = screenWidth * 1.5;
    const itemsPerRow = Math.floor(totalWidthNeeded / itemWidth);
    const totalItems = props.homepage.brands.length * itemsPerRow;

    const repeatedBrands = [];
    for (let i = 0; i < totalItems; i++) {
      repeatedBrands.push(...props.homepage.brands);
    }

    setItems(repeatedBrands);
  }, [props.homepage.brands]);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 w-screen">
      <div className="relative flex overflow-x-hidden">
        <ul className="flex items-center animate-marquee whitespace-nowrap">
          {items.map((brand: any, index: number) => {
            return (
              <li key={index} className="w-20 md:w-32 mx-6 relative h-20">
                <Image
                  src={brand.logo.sourceUrl}
                  fill
                  priority
                  sizes="auto"
                  style={{
                    objectFit: "contain",
                    zIndex: -1,
                  }}
                  alt={""}
                  className="z-0"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
