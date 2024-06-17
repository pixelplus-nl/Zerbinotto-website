import Image from "next/image";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { unbounded } from "@/app/fonts";
import { SocialIcon } from "react-social-icons";

export default function MobileMenu(props: any) {
  return (
    <div className="flex flex-col justify-between h-full pb-20 lg:pb-0">
      <div className="flex justify-between">
        <Image
          src="/submark.svg"
          width={300}
          height={300}
          alt="submark logo"
          className="w-12 md:w-20 lg:w-12"
        />

        <div className="group [perspective:1000px]">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <TfiClose
              onClick={() => props.setIsOpen(false)}
              size={20}
              className="md:size-10 backface-invis "
            />
            <TfiClose
              onClick={() => props.setIsOpen(false)}
              size={20}
              className="md:size-10 absolute inset-0 [transform:rotateY(180deg)] opacity-50 [backface-visibility:hidden]"
            />
          </div>
        </div>
      </div>

      <ul
        className={`w-full ${unbounded.className} text-3xl md:text-5xl lg:text-4xl flex flex-col gap-3 md:gap-5 lg:gap-3`}>
        {props.data.map((item: any, index: number) => {
          return (
            <li className="flex items-center group" key={index}>
              <Link className="flex-1" href={item.uri}>
                {item.label}
              </Link>
              <HiOutlineArrowLongRight className="mr-2 transition-all group-hover:mr-0" />
            </li>
          );
        })}
      </ul>

      <ul className="font-thin text-sm md:text-2xl lg:text-lg flex-col flex gap-5">
        <li>
          <p>Muntstraat 7 </p>
          <Link className="flex items-center gap-2 group" href="#">
            6211 EG Maatricht{" "}
            <HiOutlineArrowLongRight
              className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
              size="1.5rem"
            />
          </Link>
        </li>
        <li>
          <Link className="flex group" href="tel:+310433258199">
            +31 (0)43 325 81 99{" "}
            <HiOutlineArrowLongRight
              className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
              size="1.5rem"
            />
          </Link>
          <Link className="flex group" href="mailto:info@zerbinotto.nl">
            info@zerbinotto.nl
            <HiOutlineArrowLongRight
              className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
              size="1.5rem"
            />
          </Link>
        </li>

        <li className="flex flex-col gap-2 font-thin">
          <div className="flex gap-2 group items-center">
            <SocialIcon
              bgColor="#EAE8E2"
              fgColor="#000"
              url="https://www.instagram.com/zerbinottobrandstore/"
              className="!w-7 !h-7 md:!w-9 md:!h-9"
            />
            <Link
              className="flex items-center"
              href="https://www.instagram.com/zerbinottobrandstore/">
              Instagram{" "}
              <HiOutlineArrowLongRight
                className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                size="1.5rem"
              />
            </Link>
          </div>

          <div className="flex gap-2 group items-center">
            <SocialIcon
              bgColor="#EAE8E2"
              fgColor="#000"
              url="https://www.facebook.com/brandstore.zerbinotto/"
              className="!w-7 !h-7 md:!w-9 md:!h-9"
            />
            <Link
              className="flex items-center "
              href="https://www.facebook.com/brandstore.zerbinotto/">
              Facebook{" "}
              <HiOutlineArrowLongRight
                className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                size="1.5rem"
              />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
