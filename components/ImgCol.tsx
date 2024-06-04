"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

export default function imgCol(props: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scales = [4, 3, 2, 3, 2];

  return (
    <section
      ref={container}
      className="relative h-[300vh] py-12 md:py-20 lg:py-28">
      <div className="sticky overflow-hidden top-0 h-screen">
        {props.homepage.imgcol.map((src: any, index: any) => {
          const scaleFactor = scales[index];
          const scale = useTransform(scrollYProgress, [0, 1], [1, scaleFactor]);

          const isMiddle = index === 0;
          const customMiddleClasses = isMiddle ? "z-30" : "";

          const isFirstChild = index === 1;
          const customFirstClasses = isFirstChild
            ? "left-[5vw] top-[3vh] w-[35vw] h-[30vh]"
            : "";

          const isSecondChild = index === 2;
          const customSecondClasses = isSecondChild
            ? "right-[7vw] top-[1vh] w-[35vw] h-[30vh]"
            : "";

          const isThirdChild = index === 3;
          const customThirdClasses = isThirdChild
            ? "right-[6vw] bottom-3 w-[35vw] h-[30vh]"
            : "";

          const isFourthChild = index === 4;
          const customFourthClasses = isFourthChild
            ? "left-[2vw] bottom-3 w-[35vw] h-[30vh]"
            : "";

          return (
            <div
              key={index}
              className={`w-full flex justify-center items-center h-full absolute ${
                customFirstClasses ||
                customSecondClasses ||
                customThirdClasses ||
                customFourthClasses ||
                customMiddleClasses
              }`}>
              <motion.div
                style={{ scale }}
                className="w-[25vw] h-[25vh] relative ">
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
