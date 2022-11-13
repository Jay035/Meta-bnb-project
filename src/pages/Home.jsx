import heroImg from "../assets/Hero-section/hero-img.png";
import MBTokenLogo from "../assets/Hero-section/MBToken-logo.svg";
import MetamaskLogo from "../assets/Hero-section/Metamask-logo.svg";
import OpenSeaLogo from "../assets/Hero-section/Opensea-logo.svg";
import Inspiration from "../components/Inspiration";
import NFTs from "../components/NFTs";

export default function Home() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-[4.19rem] mt-16 lg:mt-[7.8rem]"
      >
        <section className="grid place-content-between items-center gap-20 w-11/12 mx-auto md:grid-cols-2 lg:max-w-[900px] lg:w-full xl:max-w-[1221px]">
          <div
            data-aos="fade-right"
            className="flex flex-col gap-4 text-center text-[#434343] text-lg md:gap-8 md:text-left xl:gap-12"
          >
            <h1 className="text-3xl lg:text-[3.5rem] font-medium tracking-tight leading-[140%]">
              Rent a <span className="text-[#A02279] font-semibold">Place</span>{" "}
              away from{" "}
              <span className="text-[#A02279] font-semibold">Home</span> in the{" "}
              <span className="text-[#A02279] font-semibold">Metaverse</span>
            </h1>
            <p className="leading-[35px]">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
            <form className="flex items-center text-base">
              <input
                type="text"
                placeholder="Search for location"
                className="outline-none py-4 pl-[15px] w-full bg-[rgba(247, 247, 247, 0.1)] rounded-l-lg border border-[#A3A3A3] leading-[130%]"
              />
              <input
                type="button"
                value="Search"
                className="text-center cursor-pointer text-white bg-[#A02279] rounded-r-lg py-4 w-[230px] hover:opacity-90"
              />
            </form>
          </div>
          <img
            data-aos="fade-left"
            className="w-full"
            src={heroImg}
            alt="hero img"
          />
        </section>

        <section
          data-aos="fade-up"
          className="flex justify-around items-center py-[10px] bg-[#A02279]"
        >
          <img
            className="w-[26%] md:w-[15%]"
            src={MBTokenLogo}
            alt="MBToken logo"
          />
          <img
            className="w-[26%] md:w-[15%]"
            src={MetamaskLogo}
            alt="Metamask logo"
          />
          <img
            className="w-[26%] md:w-[15%]"
            src={OpenSeaLogo}
            alt="opensea logo"
          />
        </section>
      </div>
      <Inspiration />
      <NFTs />
    </>
  );
}
