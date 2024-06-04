import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { unbounded } from "@/app/fonts";
import { getHomePage } from "@/lib/getHomePage";

export default async function Footer() {
  const data = await getHomePage();

  return (
    <footer className="bg-black px-5 md:px-10 pt-32 pb-10 text-white">
      <Image
        src="logo.svg"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="data:..."
        priority
        alt="logo"
        className="w-60"
      />
      <div className="flex mt-10 justify-between">
        <div className="flex gap-20">
          <ul className="  w-fit text-sm flex-col flex gap-5">
            <li>
              <p>Muntstraat 7 </p>
              <Link className="flex items-center relative group gap-2" href="#">
                6211 EG Maatricht{" "}
                <HiOutlineArrowLongRight
                  className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                  size="1.5rem"
                />
              </Link>
            </li>
            <li>
              <Link
                className="flex relative group gap-2"
                href="tel:+310433258199">
                +31 (0)43 325 81 99
                <HiOutlineArrowLongRight
                  className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                  size="1.5rem"
                />
              </Link>
              <Link
                className="flex group relative gap-2"
                href="mailto:info@zerbinotto.nl">
                info@zerbinotto.nl
                <HiOutlineArrowLongRight
                  className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                  size="1.5rem"
                />
              </Link>
            </li>

            <li className="flex flex-col gap-2 ">
              <div className="flex gap-2 items-center">
                <SocialIcon
                  bgColor="#EAE8E2"
                  fgColor="#000"
                  url="https://www.instagram.com/zerbinottobrandstore/"
                  className="!w-7 !h-7"
                />
                <Link
                  className="flex items-center group relative gap-2"
                  href="https://www.instagram.com/zerbinottobrandstore/">
                  Instagram{" "}
                  <HiOutlineArrowLongRight
                    className="rotate-[315deg] group-hover:rotate-[360deg] transition-all"
                    size="1.5rem"
                  />
                </Link>
              </div>

              <div className="flex gap-2 items-center">
                <SocialIcon
                  bgColor="#EAE8E2"
                  fgColor="#000"
                  url="https://www.facebook.com/brandstore.zerbinotto/"
                  className="!w-7 !h-7"
                />
                <Link
                  className="flex items-center group relative gap-2"
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
          <ul className="hidden md:block">
            <li className="flex gap-5">
              <span className="grow">Ma</span>
              <span className="tracking-widest">12:00 - 18:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Di</span>
              <span className="tracking-widest">9:30 - 18:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Wo</span>
              <span className="tracking-widest">9:30 - 18:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Do</span>
              <span className="tracking-widest">9:30 - 18:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Vr</span>
              <span className="tracking-widest">9:30 - 18:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Za</span>
              <span className="tracking-widest">9:30 - 17:00</span>
            </li>
            <li className="flex gap-5">
              <span className="grow">Zo</span>
              <span className="tracking-widest">12:00 - 17:00</span>
            </li>
            <li>Elke zondag geopend</li>
          </ul>
        </div>

        <Image
          src="submark.svg"
          width={175}
          height={175}
          alt="submark"
          className="w-auto h-44 hidden md:block"
        />
      </div>
      <div className="mt-10">
        <p className={`uppercase font-bold ${unbounded.className}`}>Let op!</p>
        <p>{data.pages.edges[0].node.homepage.footeralert}</p>
      </div>
      <ul className="flex font-thin mt-20 text-[#AAAAAA]  flex-wrap gap-x-5">
        <li>
          <Link className="relative group" href="#">
            Algemene voorwaarden
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </Link>
        </li>
        <li>
          <Link className="relative group" href="#">
            Privacyverklaring
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </Link>
        </li>
        <li>
          <Link className="relative group" href="#">
            Cookies
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </Link>
        </li>
        <li>
          <Link className="relative group" href="#">
            Colofon
            <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
