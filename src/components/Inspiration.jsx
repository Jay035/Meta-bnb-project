import { Data } from "./Data";
import img4 from "../assets/inspiration-images/4.png";
import stars from "../assets/inspiration-images/stars.png";

export default function Inspiration() {
  console.log(Data);
  return (
    <section className="m-10 lg:p-[6.25rem] ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-black font-bold">
        Inspiration for your next adventure
      </h1>
      {/* grid */}
      <div className="grid mt-11 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Data().slice(0, 8).map((item) => (
          <div key={item.id} className="container flex flex-col justify-between border border-[#D7D7D7] rounded-2xl p-4">
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
      </div>
    </section>
  );
}
