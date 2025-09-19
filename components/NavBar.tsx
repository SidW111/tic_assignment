import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-10 left-0 w-full z-50 shadow-md">
      <div className="w-[80%] mx-auto flex justify-between items-center px-6 py-1 rounded-lg bg-white">
        {/* left */}
        <div className="flex items-center space-x-2">
          <Image src="/saba-group-logo.png" alt="Logo" width={85} height={85} />
        </div>

        {/* middle */}
        <div className="flex text-lg  space-x-8 text-gray-700 font-semibold">
          <Link
            href="/"
            className="text-green-800"
          >
            Home
          </Link>
          <Link href="/about" className="hover:text-green-800">
            About
          </Link>
          <Link href="/products" className="hover:text-green-800">
            Products
          </Link>
          <Link href="/careers" className="hover:text-green-800">
            Careers
          </Link>
        </div>

        {/* right */}
        <div>
          <button className="bg-yellow-300 text-gray-900 px-5 py-2 rounded-md font-medium shadow hover:bg-yellow-400">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
