import footerLogo from "../assets/footer/footer-logo.svg";
import facebookLogo from "../assets/footer/facebook-logo.svg";
import instagramLogo from "../assets/footer/instagram-logo.svg";
import twitterLogo from "../assets/footer/twitter-logo.svg";
import copyrightIcon from "../assets/footer/copyright-icon.svg";

export default function Footer() {
  return (
    <footer
      data-aos="fade-in"
      className="bg-[#1D1D1E] text-white grid gap-10 pt-14 pb-9 px-10 lg:px-28"
    >
      <div className="grid gap-10 lg:gap-[11.7rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <section
          data-aos="fade-left"
          className="flex flex-col gap-8 pb-3 md:justify-between md:gap-24"
        >
          {/* footer logo */}
          <img
            className="w-44 md:w-[14.56rem]"
            src={footerLogo}
            alt="footer logo"
          />
          {/* social media icons */}
          <div className="flex items-center gap-8">
            <img src={facebookLogo} alt="facebook logo" />
            <img src={instagramLogo} alt="instagram logo" />
            <img src={twitterLogo} alt="twitter logo" />
          </div>
        </section>
        <section data-aos="fade-left" className="grid gap-10 md:gap-[13.56rem]">
          <div className="flex flex-col gap-[23px]">
            <p className="font-bold text-lg leading-6">Community</p>
            <section className="text-[#F1F3F9] text-sm flex flex-col gap-[13px]">
              <a href="" className="leading-9 w-fit">
                NFT
              </a>
              <a href="" className="leading-9 w-fit">
                Tokens
              </a>
              <a href="" className="leading-9 w-fit">
                Landlords
              </a>
              <a href="" className="leading-9 w-fit">
                Discord
              </a>
            </section>
          </div>
        </section>
        <section data-aos="fade-left">
          <div className="flex flex-col gap-[23px]">
            <p className="font-bold text-lg leading-6">Places</p>
            <section className="text-[#F1F3F9] text-sm flex flex-col gap-[13px]">
              <a href="" className="leading-9 w-fit">
                Castle
              </a>
              <a href="" className="leading-9 w-fit">
                Farms
              </a>
              <a href="" className="leading-9 w-fit">
                Beach
              </a>
              <a href="" className="leading-9 w-fit">
                Learn more
              </a>
            </section>
          </div>
        </section>
        <section data-aos="fade-left">
          <div className="flex flex-col gap-[23px]">
            <p className="font-bold text-lg leading-6">About us</p>
            <section className="text-[#F1F3F9] text-sm flex flex-col gap-[13px]">
              <a href="" className="leading-9 w-fit">
                Road map
              </a>
              <a href="" className="leading-9 w-fit">
                Creators
              </a>
              <a href="" className="leading-9 w-fit">
                Career
              </a>
              <a href="" className="leading-9 w-fit">
                Contact us
              </a>
            </section>
          </div>
        </section>
      </div>

      <p className="flex items-center gap-2">
        <img src={copyrightIcon} alt="copyright icon" />
        <span className="text-[#F7F7F7]">2022 Metabnb</span>
      </p>
    </footer>
  );
}
