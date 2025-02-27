import Image from "next/image";
import Navbar from "../components/Navbar";
import Bottom from "../components/aboutus/Bottom";

export default function Page() {
  return (
    <section className="h-dvh bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl md:text-4xl font-poppins font-semibold text-[#017848]">
            Our mission
          </span>
          <p className="md:hidden flex text-center text-3xl font-poppins font-semibold text-black mt-7">
            We&apos;re making <br /> homeownership simpler,
            <br />
            faster and most <br />
            importantly,more <br />
            accessible for all Americans
          </p>
          <p className="hidden md:block text-center text-5xl font-poppins font-semibold text-black mt-7 leading-snug">
            We&apos;re making homeownership simpler, faster <br /> and most
            importantly,more accessible for all <br /> Americans
          </p>
        </div>
      </div>

      {/* Mobile View */}

      <div className="md:hidden min-h-screen flex flex-col items-center justify-center px-9">
        <div className="flex flex-col gap-5 max-w-sm">
          <div className="relative">
            <Image
              src="/vishal.png"
              alt="mission"
              width={300}
              height={300}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-3 rounded-full shadow-lg">
                ▶️
              </button>
            </div>
          </div>
          <span className="text-2xl font-poppins font-semibold leading-snug">
            The status quo is <br /> broken
          </span>
          <p className="text-lg font-poppins text-gray-700 leading-relaxed">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren&apos;t transparent and some are simply
            outrageous in size. Traditional mortgage lending is rife with
            unnecessary fees and slow, painful processes. It&apos;s a system set
            up to benefit insiders — not you. Better.com CEO, Vishal Garg, set
            out to change that.
          </p>
          <button className="bg-[#017848] font-roboto text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-[#01663e] transition">
            Read Vishal&apos;s story
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center min-h-screen bg-[#fdfbf6] px-36">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl font-semibold text-gray-900">
              The status quo is broken
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              The traditional processes around homeownership are opaque and
              stressful. Fees aren&apos;t transparent and some are simply
              outrageous in size. Traditional mortgage lending is rife with
              unnecessary fees and slow, painful processes. It&apos;s a system
              set up to benefit insiders — not you. Better.com CEO, Vishal Garg,
              set out to change that.
            </p>
            <button className="bg-[#017848] text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-[#01663e] transition mt-6">
              Read Vishal&apos;s story
            </button>
          </div>

          <div className="relative">
            <Image
              src="/vishal.png"
              alt="Vishal Garg"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="6,4 14,10 6,16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </section>
  );
}
