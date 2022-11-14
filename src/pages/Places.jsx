import settingsIcon from "../assets/setting-logo.svg";
import { Data } from "../components/Data";
import stars from "../assets/inspiration-images/stars.png";

export default function Places() {
  const filterNames = [
    "Restaurant",
    "Cottage",
    "Castle",
    "fantasy city",
    "beach",
    "Off-grid",
    "farm",
  ];

  return (
    <main className="px-6 pt-10 w-full mx-auto max-w-[1240px]">
      {/* location filters */}
      <section
        data-aos="fade-up"
        className="flex justify-between flex-col gap-4 mb-[4.8rem] md:flex-row md:items-center md:gap-8 lg:gap-0"
      >
        <div className="flex flex-wrap gap-x-8 gap-y-4 lg:gap-12">
          {filterNames.map((filterName) => (
            <button
              key={filterName}
              className="text-[#434343] text-xl transition-all hover:font-semibold"
            >
              {filterName}
            </button>
          ))}
        </div>
        <button className="flex justify-between w-40 border border-[#B4B4B4] py-[14px] px-3 rounded-lg bg-white cursor-pointer hover:opacity-90">
          <p className="text-base text-[#333333] text-center">Location</p>
          <img src={settingsIcon} alt="settings icon" />
        </button>
      </section>
      {/* grid */}
      <section className="grid mb-[5.75rem] mt-[4.8rem] gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Data().map((item) => (
          <div
            key={item.id}
            data-aos="fade-left"
            className="container flex flex-col justify-between border border-[#D7D7D7] rounded-2xl p-4"
          >
            <img
              className="w-[16.25rem] mx-auto"
              src={item.img}
              alt={item.name}
            />
            <section className="flex flex-col gap-[0.625rem] font-normal text-[#434343] text-xs mt-4">
              <div className="flex justify-between items-center">
                <p>{item.name}</p>
                <p className="font-bold">{item.size}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{item.distance}</p>
                <p>{item.duration}</p>
              </div>
              {/* stars container */}
              <img className="w-[92px] rounded-2xl" src={stars} alt="stars" />
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}
