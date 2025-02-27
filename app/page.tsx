"use client";

import { Clock, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Better from "./components/Better";
import Footer from "./components/Footer";
import Questions from "./components/Questions";

export default function Page() {
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

  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar />
      <section className="h-dvh bg-[#004733] flex flex-col items-center text-white overflow-hidden px-6 text-center">
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

      {/* Section 4 */}
      <Questions />
      {/* <Better /> */}

      {/* <Footer /> */}
    </>
  );
}
