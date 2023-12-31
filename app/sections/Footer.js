import { LogoSvg } from "@app/assets";
import { FooterNavData } from "@app/constants";
import Image from "next/image";
import Link from "next/link";


const Footer = () => (
  <footer className="boxWidth paddingX paddingY pb-10">
    <div className="flex items-center justify-center h-4 pb-4 xs:pb-8">
      <a href="https://daniel-ibitowa.vercel.app" target="_blank">
        <Image src={LogoSvg} className="w-28 xs:w-48" alt="logo" />
      </a>
    </div>

    <ul className="flex justify-center gap-x-4 sm:gap-x-10 list-none mt-4 flex-wrap">
      {FooterNavData.map((item) => (
        <li key={item.name} className="text-black text-base hover:text-primary">
          <Link href={item.href}>{item.name}</Link></li>
      ))}
    </ul>

    <div className="text-center text-base text-text mt-4">
      <p className="opacity-60"> &copy; {new Date().getFullYear()} All right reserved - Developed by <span className="block text-lg font-bold hover:text-primary mt-1"><a href="https://daniel-ibitowa.vercel.app" target="_blank"> Daniel Ibitowa</a></span></p>
      </div>

  </footer>
);

export default Footer