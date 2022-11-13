import NFTImage from "../assets/NFT-group.png";

export default function NFTs() {
  return (
    <section
      data-aos="fade-in"
      className="grid md:grid-cols-2 place-content-between items-center gap-16 md:gap-[7.625rem] bg-[#A02279] border border-black px-10 py-12 lg:px-24 lg:py-[6.25rem]"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col gap-5 md:gap-9 text-sm md:text-lg"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-transparent leading-[60px] bg-clip-text bg-white font-bold">
          Metabnb NFTs
        </h1>
        <p className="text-transparent leading-[35px] bg-clip-text bg-white">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="px-6 py-1 md:px-[2.1rem] md:py-2 lg:py-[0.8rem] w-fit bg-white rounded-lg leading-5 text-center">
          <a
            href=""
            className="text-transparent leading-[35px] bg-clip-text bg-[#A02279]"
          >
            Learn more
          </a>
        </button>
      </div>
      <img
        data-aos="fade-left"
        className="w-full"
        src={NFTImage}
        alt="NFT image"
      />
    </section>
  );
}
