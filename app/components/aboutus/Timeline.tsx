import Image from "next/image";
import Better from "../Better";
import Footer from "../Footer";

export default function Timeline() {
  const events = [
    {
      year: "2014",
      text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: "2015",
      text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: "2016",
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: "2017",
      text: "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: "2018",
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: "2021",
      text: "Better acquires Trussle — The UK's most innovative online mortgage broker.",
    },
    {
      year: "2022",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2023",
      text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      year: "Today",
      text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];

  return (
    <section className="h-vh bg-[#fdfbf6] ">
      <div className="flex flex-col items-center justify-center mt-32">
        <span className="text-3xl ">Backed by</span>
        <div className="flex md:flex-row flex-wrap lg:flex-nowrap lg:justify-center lg:gap-16 flex-col items-center gap-8 py-6 bg-[#fdfbf6]]">
          <Image
            src="/icons/softbank.png"
            alt="SoftBank"
            width={150}
            height={50}
            objectFit="cover"
          />
          <Image
            src="/icons/ally.png"
            alt="Ally"
            width={90}
            height={50}
            objectFit="contain"
          />
          <Image
            src="/icons/citi.png"
            alt="Citi"
            width={90}
            height={50}
            objectFit="contain"
          />
          <Image
            src="/icons/pingan.png"
            alt="Ping An Bank"
            width={90}
            height={50}
            objectFit="contain"
          />
          <Image
            src="/icons/goldman.png"
            alt="Goldman Sachs"
            width={130}
            height={50}
            objectFit="contain"
          />
          <Image
            src="/icons/kpcb.png"
            alt="KPCB"
            width={100}
            height={50}
            objectFit="contain"
          />
          <Image
            src="/icons/amex.png"
            alt="American Express"
            width={150}
            height={50}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center py-12">
        <h2 className="text-3xl font-poppins font-semibold mb-6">
          Company Timeline
        </h2>
        <div className="relative mt-11 border-l-4 border-green-500">
          {events.map((event, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className="bg-[#007848] text-white font-poppins font-bold px-3 py-1 rounded-full w-fit mb-2">
                {event.year}
              </div>
              <div className="bg-[#dfe0db] font-roboto font-light shadow-lg p-4 rounded-md w-72 sm:w-96">
                {event.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Better />
      <Footer />
    </section>
  );
}
