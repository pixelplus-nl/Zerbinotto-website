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
import Button from "../button";

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
      <div className="h-96 md:h-[40rem] lg:h-screen absolute flex items-center w-full">
        <div className="z-20 relative flex justify-between w-full px-5">
          <button
            className="relative group overflow-hidden flex justify-start items-center"
            onClick={handlePrev}>
            <HiOutlineArrowLongLeft
              size="2rem"
              className="md:size-14 absolute -translate-y-10 duration-700 transition-all group-hover:translate-y-0"
              color="#C14C23"
            />
            <HiOutlineArrowLongLeft
              size="2rem"
              className="md:size-14 absolute group-hover:translate-y-10 duration-700"
              color="#fff"
            />
            <HiOutlineArrowLongLeft
              size="2rem"
              className="md:size-14 invisible group-hover:translate-y-10 duration-700"
              color="#fff"
            />
          </button>
          <button
            className="relative group overflow-hidden  flex justify-end items-center"
            onClick={handleNext}>
            <HiOutlineArrowLongRight
              size="2rem"
              className="md:size-14 absolute -translate-y-10 duration-700 transition-all group-hover:translate-y-0"
              color="#C14C23"
            />
            <HiOutlineArrowLongRight
              size="2rem"
              className="md:size-14 absolute group-hover:translate-y-10 duration-700"
              color="#fff"
            />
            <HiOutlineArrowLongRight
              size="2rem"
              className="md:size-14 invisible  group-hover:translate-y-10 duration-700"
              color="#fff"
            />
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
        modules={[Pagination]}
        className="mySwiper">
        {props.homepage.brandSlider.map((brand: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-96 lg:h-screen md:h-[40rem] relative">
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

              <div className="px-20 drop-shadow-xl lg:p-10 lg:z-30 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[10%] z-20 bg-white flex flex-col justify-center h-[30rem] md:h-[35rem] lg:h-auto lg:py-20">
                <div className="max-w-sm mx-auto">
                  <div className="relative flex justify-center lg:w-60 mx-auto mb-10 z-20">
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
                  <h3
                    className={`text-xl ${unbounded.className} font-semibold`}>
                    {brand.brandname}
                  </h3>
                  <div className="mb-10"
                    dangerouslySetInnerHTML={{ __html: brand.paragraph }}></div>
                  <Button
                    color="#707070"
                    homepage={props.homepage}
                    buttonText={brand.ctaButton.buttontext}
                    buttonLink={brand.ctaButton.buttonlink}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
