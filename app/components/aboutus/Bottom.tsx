import React from "react";
import Timeline from "./Timeline";

const Bottom = () => {
  return (
    <section className="h-dvh bg-[#fdfbf6]">
      <div className="bg-[#007848] text-white px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            How we&apos;re changing things
          </h2>
          <p className="mt-6 text-sm md:text-[1rem] text-center md:text-left leading-relaxed">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers&apos;.
          </p>
          <p className="mt-4 text-sm md:text-[1rem] text-center md:text-left leading-relaxed">
            That&apos;s why Better.com is redefining the homeownership process
            from the ground up. We&apos;re using technology to make it faster
            and more efficient, and humans to help make it friendly and
            enjoyable.
          </p>
        </div>
      </div>
      <Timeline />
    </section>
  );
};

export default Bottom;
