import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Cards from "./Cards";

interface Product {
  name: string;
}

const prod: Product[] = [
  { name: "Our Products" },
  { name: "Calculators" },
  { name: "Guides & FAQs" },
];

const Questions: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="h-screen w-full bg-white pt-28 md:pt-16 md:pl-10">
      <div className="w-full">
        <div className="md:ml-[60px] ml-[20px] mb-10">
          <span className="block md:hidden text-[2.75rem] font-semibold font-opensans leading-[3rem] text-xl">
            Got Questions? <br /> We&apos;ve got <br /> answers
          </span>

          {/* Visible only on desktop */}
          <span className="hidden md:block text-[2.5rem] font-bold font-opensans leading-[3rem]">
            Got Questions? <br /> We&apos;ve got answers
          </span>
        </div>

        <div className="md:hidden flex flex-wrap justify-center gap-2 px-4 sm:px-6 mt-4 mb-6 overflow-x-auto">
          {prod.map((t, index) => (
            <button
              key={t.name}
              onClick={() => setActive(index)}
              className={`px-4 py-2 border-4 font-semibold rounded-full transition-all duration-300 
                ${
                  active === index
                    ? "border-green-800 text-green-800 bg-white"
                    : "border-gray-300 text-gray-700 bg-transparent hover:border-gray-400"
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="hidden md:block absolute space-x-2 right-20 bottom-[-1090]">
          {prod.map((t, index) => (
            <button
              key={t.name}
              onClick={() => setActive(index)}
              className={`px-4 py-2 border-4 font-semibold rounded-full transition-all duration-300
                ${
                  active === index
                    ? "border-green-800 text-green-800 bg-white"
                    : "border-gray-300 text-gray-700 bg-transparent hover:border-gray-400"
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="md:hidden flex flex-wrap justify-center gap-6">
          <Cards
            title="Buying your first home with Better"
            imageUrl="/home.png"
            altText="Beautiful House"
          />
          <Cards
            title="One day Mortgage"
            imageUrl="/1day.png"
            altText="Beautiful House"
          />
          <Cards
            title="Better HELOC"
            imageUrl="/couple.png"
            altText="Beautiful House"
          />
          <Cards
            title="Insurance"
            imageUrl="/asian.png"
            altText="Beautiful House"
          />
        </div>

        <div className="hidden md:flex flex-col gap-[24px] mt-24">
          <div className="flex flex-row gap-[24px] items-center justify-center">
            <div className="flex flex-col gap-6 bg-[#f0f7f1] w-[430px] h-[358px]">
              <span className="text-xl font-poppins font-semibold mt-[35px] ml-[48px] mr-[48px]">
                Buying your first home with Better
              </span>
              <div className="flex items-center border-black justify-center w-10 h-10 bg-white rounded-full ml-[46px]">
                <ArrowRight className="text-green-700" />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/home.png"
                  alt="Card Image"
                  width={350}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="bg-[#f0f7f1] w-[906px] h-[358px] flex flex-row">
              <div className="flex flex-col gap-6 mt-[35px] ml-[48px] w-[485px] h-[288]">
                <span className="text-[24px] font-semibold font-poppins">
                  One Day Mortgage
                </span>
                <p className="text-[14px]">
                  Kick your home loan into hyperdrive. Going from locked rate to
                  Commitment Letter takes weeks for traditional lenders. We do it
                  in a single day. Traditional lenders deliver a Commitment
                  Letter in a few weeks.1
                </p>
              </div>
              <div className="flex items-center justify-center ml-[40px]">
                <Image
                  src="/1day.png"
                  alt="Card Image"
                  width={285}
                  height={267}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[24px] items-center justify-center mb-7">
            <div className="bg-[#f0f7f1] w-[906px] h-[358px] flex flex-row">
              <div className="flex flex-col gap-6 mt-[35px] ml-[48px] w-[485px] h-[288]">
                <span className="text-[24px] font-semibold font-poppins">
                  Better HELOC
                </span>
                <p className="text-[14px]">
                  Introducing One Day HELOC™-your express lane to getting cash
                  from your home with our Home Equity Line of Credit2. Access up
                  to 90% of your home equity as cash in as little as 7 days.3
                </p>
              </div>
              <div className="flex items-center justify-center ml-[40px]">
                <Image
                  src="/1day.png"
                  alt="Card Image"
                  width={285}
                  height={267}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-[#f0f7f1] w-[430px] h-[358px]">
              <span className="text-xl font-poppins font-semibold mt-[35px] ml-[48px] mr-[48px]">
                Insurance
              </span>
              <div className="flex items-center border-black justify-center w-10 h-10 bg-white rounded-full ml-[46px]">
                <ArrowRight className="text-green-700" />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/asian.png"
                  alt="Card Image"
                  width={350}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;