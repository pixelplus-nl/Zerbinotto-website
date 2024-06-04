"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const variants = {
  open: { y: 0 },
  close: { y: "200vh" },
  closed: { y: "200vh", display: "none" },
};

export default function HeaderMobile(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <header className="bg-gradient-to-b z-40 xl:hidden items-center px-5 md:px-10 pt-5 md:pb-5 from-black/80 via-black/40 md:via-black/50 fixed w-full flex justify-between">
        <div className="group [perspective:1000px]">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <button className="w-12 h-12 md:w-14 md:h-14 backdrop-blur-xl backface-invis bg-white/30 md:bg-white/50 rounded-full flex justify-center items-center">
              <HiLocationMarker size="3rem" className="w-6" />
            </button>
            <button className="flip-button-back absolute inset-0  w-12 h-12 md:w-14 md:h-14 backdrop-blur-xl bg-black/30 md:bg-black/50 rounded-full flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <HiOutlineArrowLongRight
                size="3rem"
                color="#fff"
                className="w-6"
              />
            </button>
          </div>
        </div>

        <Link href="/">
          <Image
            src="/logo.svg"
            width={500}
            height={500}
            alt="Logo zerbinotto"
            className="w-60 md:w-80"
          />
        </Link>

        <div className="group [perspective:1000px]">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <button className="w-12 h-12 md:w-14 md:h-14 backface-invis backdrop-blur-xl flex justify-center items-center  bg-white/30 md:bg-white/50 rounded-full">
              <Hamburger
                size={22}
                color="#000"
                onToggle={() => setIsOpen((isOpen) => !isOpen)}
                toggled={isOpen}
              />
            </button>
            <button className=" absolute inset-0 w-12 h-12 md:w-14 md:h-14 backdrop-blur-xl flex justify-center items-center  bg-black/30 md:bg-black/50 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Hamburger
                size={22}
                color="#fff"
                onToggle={() => setIsOpen((isOpen) => !isOpen)}
                toggled={isOpen}
              />
            </button>
          </div>
        </div>
      </header>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "close"}
        variants={variants}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimationComplete(!isOpen)}
        className={`${
          isAnimationComplete && !isOpen ? "hidden" : "!block"
        } w-screen p-5 md:p-10 h-screen fixed top-0 z-50 left-0 bg-black text-white`}>
        <MobileMenu setIsOpen={setIsOpen} data={props.data} />
      </motion.div>
    </>
  );
}
