import MetaMaskLogo from "../assets/metamask.svg";
import WalletConnectLogo from "../assets/wallet-connect.svg";

export default function Modal({ setModalState }) {
  return (
    <div data-aos="fade-in" className="flex justify-center items-center fixed inset-0 overflow-y-auto overflow-x-hidden bg-black/25 backdrop-blur-[1px]">
      <div className="relative w-[90%] my-6 mx-auto max-w-[600px]">
        {/* modal content */}
        <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* modal header */}
          <section className="flex justify-between items-center py-4 px-6 md:py-6 md:px-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#333333]">
              Connect Wallet
            </h3>
            <button className="">
              <i
                className="ri-close-fill cursor-pointer text-2xl w-fit h-fit"
                onClick={() => setModalState((prevState) => !prevState)}
              ></i>
            </button>
          </section>
          {/* body */}
          <section className="relative p-6 md:p-8 text-base flex flex-col gap-4 flex-none border-t border-[#CFD8DC]">
            <p className="leading-5 text-[#333333]">
              Choose your preferred wallet
            </p>
            {/* metamask */}
            <div className="flex justify-between items-center py-3 px-6 bg-[#F8F9FA] border border-solid border-[#cfd8dc] rounded-xl">
              <div className="flex items-center gap-4">
                <img src={MetaMaskLogo} alt="metamask logo" />
                <h3>Metamask</h3>
              </div>
              <button className="">
                <i className="ri-arrow-right-s-line cursor-pointer text-xl"></i>
              </button>
            </div>
            <div className="flex justify-between items-center py-3 px-6 bg-[#F8F9FA] border border-solid border-[#cfd8dc] rounded-xl">
              <div className="flex items-center gap-4">
                <img src={WalletConnectLogo} alt="wallet connect logo" />
                <h3>WalletConnect</h3>
              </div>
              <button className="">
                <i className="ri-arrow-right-s-line cursor-pointer text-xl"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
