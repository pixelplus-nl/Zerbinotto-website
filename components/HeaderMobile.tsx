"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const variants = {
  open: { y: 0 },
  close: { y: "200vh" },
  closed: { y: "200vh", display: "none" },
};

export default function HeaderMobile(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <>
      <header className="bg-gradient-to-b md:hidden items-center px-5 py-5 from-black via-black/40 fixed w-full flex justify-between">
        <button className="w-12 h-12 backdrop-blur-xl bg-white/30 rounded-full flex justify-center items-center">
          <HiLocationMarker size="1.2rem" />
        </button>

        <Link href="/">
          <Image
            src="/logo.svg"
            width={500}
            height={500}
            alt="Logo zerbinotto"
            className="w-60"
          />
        </Link>

        <button className="w-12 h-12 backdrop-blur-xl  bg-white/30 rounded-full">
          <Hamburger
            size={20}
            color="#000"
            onToggle={() => setIsOpen((isOpen) => !isOpen)}
            toggled={isOpen}
          />
        </button>
      </header>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "close"}
        variants={variants}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimationComplete(!isOpen)}
        className={`${
          isAnimationComplete && !isOpen ? "hidden" : "!block"
        } w-screen p-5 h-screen fixed top-0 left-0 bg-black text-white`}>
        <MobileMenu setIsOpen={setIsOpen} data={props.data} />
      </motion.div>
    </>
  );
}
