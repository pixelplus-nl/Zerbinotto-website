import Image from "next/image";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { unbounded } from "@/app/fonts";
import { SocialIcon } from "react-social-icons";

export default function MobileMenu(props: any) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between">
        <Image
          src="/submark.svg"
          width={300}
          height={300}
          alt="submark logo"
          className="w-14"
        />
        <TfiClose onClick={() => props.setIsOpen(false)} size={20} />
      </div>

      <ul
        className={`w-full ${unbounded.className} text-3xl flex flex-col gap-3`}>
        {props.data.map((item: any, index: number) => {
          return (
            <li className="flex items-center" key={index}>
              <Link className="flex-1" href={item.uri}>
                {item.label}
              </Link>
              <HiOutlineArrowLongRight />
            </li>
          );
        })}
      </ul>

      <ul className="font-thin flex-col flex gap-5">
        <li>
          <p>Muntstraat 7 </p>
          <Link className="flex items-center gap-2" href="#">
            6211 EG Maatricht{" "}
            <HiOutlineArrowLongRight
              className="rotate-[315deg]"
              size="1.5rem"
            />
          </Link>
        </li>
        <li>
          <Link className="flex" href="tel:+310433258199">
            +31 (0)43 325 81 99{" "}
            <HiOutlineArrowLongRight
              className="rotate-[315deg]"
              size="1.5rem"
            />
          </Link>
          <Link className="flex" href="mailto:info@zerbinotto.nl">
            info@zerbinotto.nl
            <HiOutlineArrowLongRight
              className="rotate-[315deg]"
              size="1.5rem"
            />
          </Link>
        </li>

        <li className="flex flex-col gap-2 font-thin">
          <div className="flex gap-2 items-center">
            <SocialIcon
              bgColor="#EAE8E2"
              fgColor="#000"
              url="https://www.instagram.com/zerbinottobrandstore/"
              className="!w-8 !h-8"
            />
            <Link
              className="flex items-center"
              href="https://www.instagram.com/zerbinottobrandstore/">
              Instagram{" "}
              <HiOutlineArrowLongRight
                className="rotate-[315deg]"
                size="1.5rem"
              />
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <SocialIcon
              bgColor="#EAE8E2"
              fgColor="#000"
              url="https://www.facebook.com/brandstore.zerbinotto/"
              className="!w-8 !h-8"
            />
            <Link
              className="flex items-center "
              href="https://www.facebook.com/brandstore.zerbinotto/">
              Facebook{" "}
              <HiOutlineArrowLongRight
                className="rotate-[315deg]"
                size="1.5rem"
              />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
