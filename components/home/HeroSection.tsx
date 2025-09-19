import Image from "next/image";
import NavBar from "../NavBar";
import HomeAboutSabaGroup from "./HomeAboutSabaGroup";
import HomeNetwork from "./HomeNetwork";

export default function HeroSection() {
  return (
    <>
      <div className="relative md:min-h-screen w-full">
        <NavBar />

        <div className="absolute inset-0 -z-10 md:h-auto h-[580px]">
          <Image
            src="/DesktopHero.jpg"
            alt="hero-img"
            fill
            priority
            className="object-cover hidden md:block"
          />
          <Image
            src="/MobileHero.jpg"
            alt="hero-img"
            fill
            priority
            className="object-cover block md:hidden opacity-85"
          />
        </div>

        <div className="flex flex-col items-center md:items-start justify-center md:justify-end md:pb-12 pt-60 h-[580px] md:h-screen md:px-36 text-white">
          <h1 className="hidden md:block text-4xl md:text-7xl font-bold leading-17 drop-shadow drop-shadow-black/20">
            Pioneering Excellence <br />
            in Specialty Chemicals <br />& Industrial Solutions
          </h1>
          <h1 className="text-[1.25rem]  text-center block md:hidden font-bold">
            Pioneering Excellence in Specialty Chemicals & Industrial Solutions
          </h1>

          <div className="mt-6 md:mt-4">
            <button
              className="text-sm md:text-lg px-4  md:px-20 py-2 md:py-4 cursor-pointer
           bg-[#10562C] rounded-tl-lg rounded-bl-lg font-semibold hover:bg-[#0e4b26]"
            >
              Know more
            </button>
            <button className="text-sm md:text-lg px-4 md:px-7 py-2 md:py-4 cursor-pointer text-black bg-white hover:bg-[#dfdfdf] rounded-tr-lg rounded-br-lg font-semibold">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen w-full">
        <HomeAboutSabaGroup />
        <HomeNetwork />
      </div>
    </>
  );
}
