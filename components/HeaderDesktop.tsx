import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";

export default function HeaderDesktop(props: any) {
  return (
    <header className="bg-gradient-to-b hidden xl:flex z-50 items-center px-5 pt-5 pb-10 from-black via-black/60 fixed w-full  justify-between">
      <Link className="flex group relative text-white gap-2" href="#">
        <div className="flex items-center gap-1">
          <HiLocationMarker color="#fff" size="1.2rem" />
          <span>FIND US</span>
        </div>
        <span>-</span>
        <div className="flex text-sm items-center gap-1">
          <span>Muntstraat 7</span>
          <HiOutlineArrowLongRight size="1rem" />
        </div>
        <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
        <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
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

      <ul className="flex gap-3 text-white">
        {props.data.map((item: any, index: number) => {
          return (
            <li className="first:hidden group relative w-max" key={index}>
              <Link href={item.uri}>
                {item.label}
                <span className="absolute duration-500 -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                <span className="absolute duration-500 -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
