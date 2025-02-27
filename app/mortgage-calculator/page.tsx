'use client'

import MortgageCalculator from "../components/Mortgage";
import Navbar from "../components/Navbar";

export default function Page() {
  return <>
    <Navbar />
    <section className="h-dvh bg-white">
    <MortgageCalculator />
    </section>
  </>;
}
