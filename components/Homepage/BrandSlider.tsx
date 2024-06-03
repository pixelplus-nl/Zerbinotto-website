"use client";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { unbounded } from "@/app/fonts";
import Link from "next/link";

export default function BrandSlider(props: any) {
  const sliderRef = useRef<any | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="pt-12">
      <div className="h-96 absolute flex items-center w-full">
        <div className="z-20 relative flex justify-between w-full px-5">
          <button onClick={handlePrev}>
            <HiOutlineArrowLongLeft size="2rem" color="#fff" />
          </button>
          <button onClick={handleNext}>
            <HiOutlineArrowLongRight size="2rem" color="#fff" />
          </button>
        </div>
        <div className="containerForBullets flex absolute justify-center z-20 !bottom-5 "></div>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        pagination={{
          el: ".containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        {props.homepage.brandSlider.map((brand: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-96 relative">
                <Image
                  src={brand.img.sourceUrl}
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

              <div className="px-20 bg-white flex flex-col justify-center h-[30rem]">
                <div className="relative mb-10 z-20">
                  <Image
                    src={brand.logo.sourceUrl}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL="data:..."
                    priority
                    alt=""
                  />
                </div>
                <h3 className={`text-xl ${unbounded.className} font-semibold`}>
                  {brand.brandname}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: brand.paragraph }}></div>

                <Link
                  className={`py-5 mt-5 flex ${unbounded.className} uppercase rounded-3xl justify-center text-white bg-[#707070] rounded-3-xl`}
                  href={brand.ctaButton.buttonlink.url}>
                  {brand.ctaButton.buttontext}
                  <span>
                    <HiOutlineArrowLongRight size="1.5rem" />
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
