import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";

export default function HeaderDesktop(props: any) {
  return (
    <header className="bg-gradient-to-b hidden md:flex items-center px-5 pt-5 pb-10 from-black via-black/60 fixed w-full  justify-between">
      <Link className="flex text-white gap-2" href="#">
        <div className="flex items-center gap-1">
          <HiLocationMarker color="#fff" size="1.2rem" />
          <span>FIND US</span>
        </div>
        <span>-</span>
        <div className="flex text-sm items-center gap-1">
          <span>Muntstraat 7</span>
          <HiOutlineArrowLongRight size="1rem" />
        </div>
      </Link>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={500}
          height={500}
          alt="Logo zerbinotto"
          className="w-60 top-6 absolute"
        />
      </Link>

      <ul className="flex gap-3 text-white text-sm">
        {props.data.map((item: any, index: number) => {
          return (
            <li className="first:hidden" key={index}>
              <Link href={item.uri}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
