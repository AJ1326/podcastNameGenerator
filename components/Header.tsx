import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-5 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/PodScribeLogo.png"
          className="sm:w-8 sm:h-8 w-6 h-6"
          width={32}
          height={32}
        />
        <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight">
          PodScribe
        </h1>
      </Link>
    </header>
  );
}
