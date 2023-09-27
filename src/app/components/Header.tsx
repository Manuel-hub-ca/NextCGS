import Link from "next/link";
import logo from "../assets/logo.jpeg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex items-center mb-4 bg-transparent w-full opacity-50">
      <nav className="w-full">
        <div className="flex w-full justify-between">
          <Image src={logo} alt="logo" className="w-28 h-28 ml-4" />
          <div className="flex justify-around w-80 items-center ">
            <Link href={"/Curators"} className="hover:text-slate-300">
              Curators
            </Link>
            <Link href={"/Artists"} className="hover:text-slate-300">
              Artist
            </Link>
            <Link href={"/ArtPieces"} className="hover:text-slate-300">
              Piece Art
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
