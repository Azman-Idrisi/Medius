"use client";

import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  StarHalf,
} from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Cards from "./components/Cards";

export default function Home() {
  const testimonials = [
    {
      name: "Arian",
    },
    {
      name: "Amanda",
    },
    {
      name: "Paul",
    },
  ];

  const prod = [
    {
      name: "Our Products",
    },
    {
      name: "Calculators",
    },
    {
      name: "Guides & FAQs",
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <>
      <Navbar />
      <section className="h-screen bg-[#004733] flex flex-col items-center text-white overflow-hidden px-6 text-center">
        {/* Heading */}
        <h1 className="md:hidden font-roboto text-5xl text-[#1ee07f] font-bold mb-6 leading-[1] mt-20">
          Mortgages made simple
        </h1>

        <h1 className="hidden md:block font-opensans font-bold text-9xl text-center justify-center text-[#1ee07f]  leading-[1.2] mt-28 z-10">
          <span>
            Mortages <br />
          </span>
          <span>made simple</span>
        </h1>

        {/* Approval Button */}
        <button className="md:hidden font-poppins items-center justify-center px-20 py-5 bg-[#1ee07f] text-black rounded-full text-lg shadow-sm hover:bg-[#18c96f] transition-all">
          Start my approval
        </button>

        <button className="hidden absolute left-44 bottom-20 md:block font-roboto px-14 py-4 bg-[#1ee07f] text-black rounded-full text-lg shadow-sm hover:bg-[#18c96f] transition-all">
          Start my approval
        </button>

        {/* Subtext */}
        <div className="md:hidden flex items-center gap-2 text-sm mt-3 opacity-90">
          <Clock size={16} />
          <span>3 min | No credit impact</span>
        </div>
        <div className="hidden md:flex items-center absolute left-52 bottom-10 gap-2 text-sm opacity-90">
          <Clock size={16} />
          <span>3 min | No credit impact</span>
        </div>

        {/* Phone Image */}
        <div className="md:hidden mt-8 absolute bottom-0">
          <Image
            src="/mobile.png" // Replace with actual image URL
            alt="Pre-approved loan"
            width={300}
            height={350}
          />
        </div>

        <div className="hidden md:flex relative mt-[-8rem]">
          <Image
            src="/mobile.png" // Replace with actual image URL
            alt="Pre-approved loan"
            width={450}
            height={450}
          />
        </div>

        {/* Google Reviews Badge */}
        <div className="md:hidden relative mt-80 bg-[#003322] px-4 py-4 rounded-md flex items-center gap-2 shadow-md">
          {/* Google Logo */}
          <Image src="/google.png" alt="Google" width={30} height={30} />

          {/* Stars */}
          <div className="flex gap-0 text-yellow-400">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" />
              ))}
            <StarHalf size={18} fill="currentColor" stroke="none" />
          </div>

          {/* Review Text */}
          <span className="text-sm text-white">
            4.6 Stars | 3177 Google reviews
          </span>
        </div>

        <div className="hidden md:flex absolute right-64 bottom-20 bg-transparent px-4 py-4 rounded-md items-center gap-2">
          {/* Stars */}
          <div className="flex gap-0">
            <Image src="/google.png" alt="Google" width={30} height={30} />
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Star
                  className="text-yellow-400 relative mt-1"
                  key={i}
                  size={20}
                  fill="currentColor"
                  stroke="none"
                />
              ))}
            <StarHalf
              className="text-yellow-400 relative mt-1"
              size={20}
              fill="currentColor"
              stroke="none"
            />
          </div>

          {/* Review Text */}
          <span className="text-sm text-white">
            4.6 Stars | 3177 Google reviews
          </span>
        </div>
      </section>

      {/* Next Section */}
      <section className="min-h-screen bg-white pt-11">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col justify-center px-4 pt-8 pb-4 bg-[#f9f9f7]">
          <h2 className="text-5xl font-bold text-[#292B29] mb-6">
            Find out why <br /> we&apos;re better.
          </h2>

          <button className="font-poppins w-full py-4 bg-[#004732] text-white rounded-full text-lg shadow-sm hover:bg-[#00402e] transition-all mb-6">
            See all our stories
          </button>

          <div className="flex items-center gap-2 mb-6 justify-center">
            <Image src="/rating.png" alt="Trustpilot" width={200} height={30} />
          </div>

          <div className="flex space-x-2 mt-4 mb-4 justify-center">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => setActive(index)}
                className={`px-4 py-2 border-2 font-semibold rounded-full transition-all duration-300
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

          <div className="mt-4">
            <Image
              src="/human.png"
              width={350}
              height={350}
              alt="Testimonial"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex py-36 px-4 md:px-10 flex-col md:flex-row w-full">
          {/* Left side - Testimonial */}
          <div className="md:w-1/2 flex flex-col md:pl-20">
            <div className="relative">
              <Image
                src="/human.png"
                width={300}
                height={300}
                alt="Testimonial"
                className="rounded-lg"
              />
            </div>

            <div className="flex space-x-2 mt-4">
              {testimonials.map((t, index) => (
                <button
                  key={t.name}
                  onClick={() => setActive(index)}
                  className={`px-4 py-2 border-2 font-semibold rounded-full transition-all duration-300
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
          </div>

          {/* Right side - Find out why message */}
          <div className="md:w-1/2 flex flex-col justify-center mt-10 md:mt-0 md:pl-36">
            <h2 className="text-5xl md:text-7xl font-bold text-[#292B29] mb-6">
              Find out why <br /> we&apos;re better.
            </h2>

            <button className="font-poppins px-8 py-4 bg-[#004732] text-white rounded-full text-lg shadow-sm hover:bg-[#00402e] transition-all w-fit mb-6">
              See all our stories
            </button>

            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/rating.png"
                alt="Trustpilot"
                width={180}
                height={30}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section */}

      <section className="h-screen w-full bg-white pt-28 md:pt-16 md:pl-10 ">
        <div className="w-full">
          <div className=" md:ml-[60px] ml-[20px] mb-10">
            <span className="block md:hidden text-[2.75rem] font-semibold font-opensans leading-[3rem] text-xl ">
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
              title="One day Mortage"
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

          <div className="hidden md:flex  flex-col gap-[24px] mt-24]">
            <div className="flex flex-row gap-[24px] items-center justify-center">
              <div className="flex flex-col gap-6 bg-[#f0f7f1] w-[430px] h-[358px]">
                <span className="text-xl font-poppins font-semibold mt-[35px] ml-[48px] mr-[48px]">
                  Buying your first home with Better
                </span>
                <div className="flex items-center border-black justify-center w-10 h-10 bg-white rounded-full ml-[46px] ">
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
                    One Day Mortage
                  </span>
                  <p className="text-[14px]">
                    Kick your home loan into hyperdrive. Going from locked rate
                    to Commitment Letter takes weeks for traditional lenders. We
                    do it in a single day. Traditional lenders deliver a
                    Commitment Letter in a few weeks.1
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
                    from your home with our Home Equity Line of Credit2. Access
                    up to 90% of your home equity as cash in as little as 7
                    days.3
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
                <div className="flex items-center border-black justify-center w-10 h-10 bg-white rounded-full ml-[46px] ">
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

      {/* Section 4 */}

      <section className="mt-[80rem] md:mt-40 lg:mt-72 px-4">
        <div className="max-w-[80rem] mx-auto py-8 font-roboto flex flex-col items-center text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-700">Better</h1>
            <p className="text-base text-gray-700 mt-2">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Better Services */}
            <div>
              {[
                {
                  title: "Better Mortgage",
                  desc: "We can&apos;t wait to say &apos;Welcome home.&apos; Apply 100% online, with expert customer support.",
                },
                {
                  title: "Better Real Estate",
                  desc: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
                },
                {
                  title: "Better Cover",
                  desc: "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
                },
                {
                  title: "Better Inspect",
                  desc: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
                },
                {
                  title: "Better Settlement Services",
                  desc: "Get transparent rates when you shop for title insurance all in one convenient place.",
                },
              ].map((service, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-lg font-bold text-green-700">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Resources
              </h2>
              <ul className="space-y-3">
                {[
                  "Home affordability calculator",
                  "Mortgage calculator",
                  "Free mortgage calculator",
                  "Mortgage calculator with taxes",
                  "Mortgage calculator with PMI",
                  "Rent vs buy calculator",
                  "HELOC payment calculator",
                  "HELOC vs cash-out refinance calculator",
                  "Buy a home",
                  "Sell a home",
                  "Get home inspection",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Company
              </h2>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Careers",
                  "Media",
                  "Partner With Us",
                  "Learning center",
                  "FAQs",
                  "Investor Relations",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:hello@better.com"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      hello@better.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:4155238837"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      415-523-8837
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      Glossary
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Legal
                </h2>
                <ul className="space-y-3">
                  {[
                    "NMLS Consumer Access",
                    "Privacy Policy",
                    "Terms of Use",
                    "Disclosures & Licensing",
                    "Affiliated Business",
                    "Browser Disclaimer",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-green-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Equal Housing Logos */}
          <div className="mt-8 flex justify-center space-x-4">
            {["EHL", "EHO"].map((logo, index) => (
              <div
                key={index}
                className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center text-sm text-gray-500"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto mt-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-gray-600">
          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="inline-flex w-10 h-10 border border-gray-400 rounded-full items-center justify-center">
                <Facebook size={16} />
              </span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="inline-flex w-10 h-10 border border-gray-400 rounded-full items-center justify-center">
                <Instagram size={16} />
              </span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="inline-flex w-10 h-10 border border-gray-400 rounded-full items-center justify-center">
                <Linkedin size={16} />
              </span>
            </a>
          </div>

          {/* Disclaimer Paragraphs */}
          <div className="space-y-4 mb-8 border-b border-gray-200 pb-6">
            <p className="text-xs sm:text-sm leading-tight">
              *Better Mortgage&apos;s One Day Mortgage® promotion offers qualified
              customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a mortgage loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. See{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                One Day Mortgage® Terms and Conditions
              </a>
              .
            </p>
            <p className="text-xs sm:text-sm leading-tight">
              *Better Mortgage&apos;s One Day HELOC® promotion offers qualified
              customers who provide certain required financial
              information/documentation within 4 hours of locking a rate on a
              HELOC loan the opportunity to receive an underwriting
              determination within 24 hours. See{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                One Day HELOC® Terms and Conditions
              </a>
              .
            </p>
            <p className="text-xs sm:text-sm leading-tight">
              *Assumes borrowers are eligible for the Automated Valuation Model
              (AVM) to calculate their home value. Funding timelines may vary.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4 text-xs sm:text-sm leading-tight">
            <p>
              © 2025 Better Home & Finance Holding Company. Better is a family
              of companies. Better Mortgage Corporation provides home loans;
              Better Real Estate, LLC provides real estate services. All rights
              reserved.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation. NMLS
              #330511.{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                NMLS Consumer Access
              </a>
              .
            </p>
            <p>
              Better Real Estate, LLC dba BRE, operating in California through
              its wholly owned subsidiary, maintains its headquarters at 325-41
              Chestnut Street, Suite 826, Philadelphia, PA 19106.{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                Full listing of license numbers
              </a>
              .
            </p>
            <p>
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                New York State Housing and Anti-Discrimination Notice
              </a>
              .
            </p>
            <p>
              Texas Real Estate Commission:{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                Information About Brokerage Services
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="underline text-gray-600 hover:text-gray-800"
              >
                Consumer Protection Notice
              </a>
              .
            </p>
            <p>
              Any unauthorized use of proprietary or intellectual property is
              strictly prohibited. All trademarks, service marks, trade names,
              logos, and domain names are proprietary to Better Home & Finance
              Holding Company.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
