import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black px-5 pt-32 pb-10 text-white">
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
      <ul className="font-thin mt-10 text-sm flex-col flex gap-5">
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
              className="!w-7 !h-7"
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
              className="!w-7 !h-7"
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
      <ul className="flex mt-20 text-[#AAAAAA] text-sm flex-wrap gap-x-5">
        <li>
          <Link href="#">Algemene voorwaarden</Link>
        </li>
        <li>
          <Link href="#">Privacyverklaring</Link>
        </li>
        <li>
          <Link href="#">Cookies</Link>
        </li>
        <li>
          <Link href="#">Colofon</Link>
        </li>
      </ul>
    </footer>
  );
}