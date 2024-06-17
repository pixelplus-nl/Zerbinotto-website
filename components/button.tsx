import Link from "next/link";
import { unbounded } from "@/app/fonts";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function button(props: any) {
  return (
    <Link
      className={`${props.color} relative group hover:bg-transparent overflow-hidden ring-2 transition-all hover:text-black md:px-10 py-5 mt-5 rounded-3xl text-white uppercase flex gap-2 justify-center ${unbounded.className}`}
      href={props.buttonLink.url}>
      <span className="relative">
        <span className="absolute group-hover:translate-y-0 duration-700 -translate-y-10 transition-all">
          {props.buttonText}
        </span>
        <span className="absolute group-hover:translate-y-10 duration-700 transition-all">
          {props.buttonText}
        </span>
        <span className="invisible group-hover:translate-y-10 duration-700 transition-all">
          {props.buttonText}
        </span>
      </span>
      <span className="relative w-[1.5rem] h-[1.5rem]">
        <span className="absolute group-hover:translate-y-0 duration-700 -translate-y-10 transition-all">
          <HiOutlineArrowLongRight size="1.5rem" />
        </span>
        <span className="absolute group-hover:translate-y-10 duration-700 transition-all">
          <HiOutlineArrowLongRight size="1.5rem" />
        </span>
      </span>
    </Link>
  );
}
