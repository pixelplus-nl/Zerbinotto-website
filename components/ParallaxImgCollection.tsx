"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImgCollection(props: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 3]),
    useTransform(scrollYProgress, [0, 1], [1, 2]),
    useTransform(scrollYProgress, [0, 1], [1, 3]),
    useTransform(scrollYProgress, [0, 1], [1, 2]),
  ];

  return (
    <section
      ref={container}
      className="relative h-[300vh] pb-12 md:pb-20 lg:pb-28">
      <div className="sticky overflow-hidden top-0 h-screen">
        {props.homepage.imgcol.map((src: any, index: any) => {
          const scale = scales[index];

          const customClasses = (() => {
            switch (index) {
              case 0:
                return "w-[25vw] h-[25vh]";
              case 1:
                return "w-[30vw] h-[30vh] left-[30vw] top-[10vh] lg:left-[28vw] lg:top-[11vh] lg:w-[25vw] lg:h-[42vh]";
              case 2:
                return "w-[55vw] h-[15vh] top-[22vh] right-[17vw] lg:right-[12vw] lg:top-[26vh] lg:w-[40vw] lg:h-[23vh]";
              case 3:
                return "lg:right-[24vw] right-[30vw] lg:bottom-[15vh] bottom-[15vh] w-[30vw] lg:w-[20vw] h-[30vh] lg:h-[40vh]";
              case 4:
                return "left-[17vw] bottom-[22vh] w-[55vw] h-[15vh] lg:left-[8vw] lg:bottom-[25vh] lg:w-[35vw] lg:h-[20vh]";
              default:
                return "";
            }
          })();

          return (
            <motion.div
              style={{ scale }}
              key={index}
              className={`flex justify-center w-full h-full items-center absolute ${
                index === 0 ? "z-20" : ""
              }`}>
              <div className={`${customClasses} relative`}>
                <Image
                  src={src.img.sourceUrl}
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
