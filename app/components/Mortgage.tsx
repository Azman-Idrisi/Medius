"use client";

import Image from "next/image";
import React, { useState, useEffect, ChangeEvent } from "react";
import PropertyTaxTable from "./PropertyTaxTable";
import MortgageCards from "./MortgageCards";
import Better from "./Better";
import Footer from "./Footer";

const MortgageCalculator: React.FC = () => {
  // State for all input values
  const [homePrice, setHomePrice] = useState<number>(406600);
  const [downPayment, setDownPayment] = useState<number>(81320);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [zipCode, setZipCode] = useState<string>("201002");
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [propertyTaxes, setPropertyTaxes] = useState<number>(359);
  const [homeInsurance, setHomeInsurance] = useState<number>(132);
  const [hoaFees, setHoaFees] = useState<number>(132);
  const [utilities, setUtilities] = useState<number>(100);

  // State for calculated values
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [principalAndInterest, setPrincipalAndInterest] = useState<number>(0);

  // Calculate mortgage whenever relevant inputs change
  useEffect(() => {
    calculateMortgage();
  }, [
    homePrice,
    downPayment,
    interestRate,
    loanTerm,
    propertyTaxes,
    homeInsurance,
    hoaFees,
    utilities,
  ]);

  // Handle down payment changes - keep percentage and amount in sync
  const handleDownPaymentChange = (value: string): void => {
    const numericValue = parseFloat(value) || 0;
    setDownPayment(numericValue);
    setDownPaymentPercent(
      Number(((numericValue / homePrice) * 100).toFixed(0))
    );
  };

  const handleDownPaymentPercentChange = (value: string): void => {
    const numericValue = parseFloat(value) || 0;
    setDownPaymentPercent(numericValue);
    setDownPayment(Number(((numericValue / 100) * homePrice).toFixed(0)));
  };

  // Handle home price changes and recalculate down payment amount
  const handleHomePriceChange = (value: string): void => {
    const numericValue = parseFloat(value) || 0;
    setHomePrice(numericValue);
    setDownPayment(
      Number(((downPaymentPercent / 100) * numericValue).toFixed(0))
    );
  };

  // Calculate mortgage payments
  const calculateMortgage = (): void => {
    // Calculate loan amount
    const loanAmount = homePrice - downPayment;

    // Monthly interest rate (annual rate divided by 12)
    const monthlyRate = interestRate / 100 / 12;

    // Total number of payments
    const payments = loanTerm * 12;

    // Calculate principal and interest payment (standard mortgage formula)
    let monthlyPrincipalAndInterest = 0;
    if (monthlyRate > 0) {
      monthlyPrincipalAndInterest =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
        (Math.pow(1 + monthlyRate, payments) - 1);
    } else {
      monthlyPrincipalAndInterest = loanAmount / payments;
    }

    setPrincipalAndInterest(monthlyPrincipalAndInterest);

    // Calculate total monthly payment (P&I + taxes + insurance + HOA)
    const totalMonthly =
      monthlyPrincipalAndInterest +
      Number(propertyTaxes) +
      Number(homeInsurance) +
      Number(hoaFees) +
      Number(utilities);

    setMonthlyPayment(totalMonthly);
  };

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-[#fefdf9]">
      <div className="max-w mt-20 mx-auto p-6 bg-green-50">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mortgage calculator
          </h1>
          <p className="text-gray-600">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Home Price Input */}
          <div>
            <label className="block text-gray-700 mb-2">Home price</label>
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-700 font-medium">$</span>
                </div>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 pl-6 rounded"
                  value={homePrice}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleHomePriceChange(e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Monthly Payment Display */}
          <div>
            <label className="block text-gray-700 mb-2">Monthly payment</label>
            <div className="text-2xl font-bold">
              ${Math.round(monthlyPayment)}/mo
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mb-8">
          <input
            type="range"
            min="10000"
            max="1000000"
            step="1000"
            value={homePrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleHomePriceChange(e.target.value)
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Additional Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {/* ZIP Code */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">ZIP code</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={zipCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setZipCode(e.target.value)
              }
            />
          </div>

          {/* Down Payment */}
          <div className="flex">
            <div className="flex-1 mr-2">
              <label className="block text-gray-700 mb-2 text-sm">
                Down payment
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-700 font-medium">$</span>
                </div>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 pl-6 rounded"
                  value={downPayment}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleDownPaymentChange(e.target.value)
                  }
                />
              </div>
            </div>
            <div className="w-20">
              <label className="block text-gray-700 mb-2 text-sm invisible">
                Percent
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 pr-6 rounded text-right"
                  value={downPaymentPercent}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleDownPaymentPercentChange(e.target.value)
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-700 font-medium">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              Interest rate
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 pr-6 rounded"
                value={interestRate}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInterestRate(parseFloat(e.target.value) || 0)
                }
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-700 font-medium">%</span>
              </div>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              Length of loan
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 p-2 appearance-none rounded"
                value={loanTerm}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setLoanTerm(parseInt(e.target.value, 10))
                }
              >
                <option value="30">30 years</option>
                <option value="20">20 years</option>
                <option value="15">15 years</option>
                <option value="10">10 years</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Monthly payment breakdown
          </h2>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-4">
              ${Math.round(monthlyPayment)}/mo
            </div>

            {/* Visual Breakdown (colored bar) */}
            <div className="flex h-10 rounded-lg overflow-hidden">
              <div
                className="bg-green-700"
                style={{
                  width: `${(principalAndInterest / monthlyPayment) * 100}%`,
                }}
              ></div>
              <div
                className="bg-indigo-500"
                style={{ width: `${(propertyTaxes / monthlyPayment) * 100}%` }}
              ></div>
              <div
                className="bg-yellow-300"
                style={{ width: `${(homeInsurance / monthlyPayment) * 100}%` }}
              ></div>
              <div
                className="bg-orange-300"
                style={{ width: `${(hoaFees / monthlyPayment) * 100}%` }}
              ></div>
              <div
                className="bg-red-300"
                style={{ width: `${(utilities / monthlyPayment) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* Principal & Interest */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-green-700 mr-3"></div>
                <div className="text-gray-700">Principal & interest</div>
                <div className="ml-auto font-medium">
                  ${Math.round(principalAndInterest)}
                </div>
              </div>

              {/* Property Taxes */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-indigo-500 mr-3"></div>
                <div className="text-gray-700">Property taxes</div>
                <div className="ml-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="text"
                      className="w-24 border border-gray-300 p-1 pl-6 text-right rounded"
                      value={propertyTaxes}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPropertyTaxes(parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Homeowners Insurance */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-yellow-300 mr-3"></div>
                <div className="text-gray-700">Homeowners insurance</div>
                <div className="ml-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="text"
                      className="w-24 border border-gray-300 p-1 pl-6 text-right rounded"
                      value={homeInsurance}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setHomeInsurance(parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* HOA Fees */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-orange-300 mr-3"></div>
                <div className="text-gray-700">HOA fees</div>
                <div className="ml-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="text"
                      className="w-24 border border-gray-300 p-1 pl-6 text-right rounded"
                      value={hoaFees}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setHoaFees(parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Utilities */}
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-red-300 mr-3"></div>
                <div className="text-gray-700">Utilities</div>
                <div className="ml-auto">
                  <div className="flex items-center">
                    <span className="font-medium">${utilities}</span>
                    <svg
                      className="w-4 h-4 text-gray-500 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy Estimate Link */}
        <div className="mb-12">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded">
            Copy estimate link
          </button>
        </div>

        {/* Get Pre-approved Button */}
        <div className="mb-12 flex justify-end">
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded">
            Get pre-approved
          </button>
        </div>
      </div>
      {/* Help Text */}
      <div className="pt-8 md:px-24 px-12 font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          How does a mortgage calculator help me?
        </h3>
        <p className="text-gray-500">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
      </div>

      <div className="pt-8 md:px-24 px-12 mt-14  font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          How much monthly mortgage payment can I afford?
        </h3>
        <p className="text-gray-500">
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your debt-to-income ratio (DTI). The maximum DTI you
          can have in order to qualify for most mortgage loans is often between
          45-50%, with your anticipated housing costs included. <br />
          Your DTI is the balance between your income and your debt. It helps
          lenders understand how safe or risky it is for them to approve your
          loan. A DTI ratio represents how much of your gross monthly income is
          spoken for by creditors, and how much of it is left over to you as
          disposable income. It&apos;s most commonly written as a percentage. For
          example, if you pay half your monthly income in debt payments, you
          would have a DTI of 50%.
        </p>
      </div>

      <div className="flex flex-col md:px-24 px-12 items-center justify-center mb-6 mt-6 bg-white">
        <span className="font-bold text-2xl mb-3">
          Formula to calculating your debt-to-income ratio:
        </span>
        <Image src="/d1.png" alt="d1" width={700} height={300} />
        <span className="font-bold text-2xl mt-3 mb-3">
          Here&apos;s an example of what calculating your DTI might look like:
        </span>
        <Image src="/d2.png" alt="d2" width={750} height={500} />
        <p className="md:px-24 mt-3 text-gray-500">
          This formula assumes a fixed-rate mortgage, where the interest rate
          remains constant throughout the loan term. And remember, you&apos;ll still
          need to add on taxes, insurance, utilities, and HOA fees if
          applicable.
        </p>
      </div>

      <div className="pt-8 mt-14 md:px-24 px-12 font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          How to use this mortgage calculator?
        </h3>
        <div className="flex flex-col gap-4 text-gray-500">
          <span>
            Play around with different home prices, locations, down payments,
            interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.
          </span>
          <span>
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that&apos;s less than 20% of the home price, private
            mortgage insurance (PMI) costs will be added to your monthly
            mortgage payment. As the costs of utilities can vary from county to
            county, we&apos;ve included a utilities estimate that you can break down
            by service. If you&apos;re thinking about buying a condo or into a
            community with a Homeowners Association (HOA), you can add HOA fees.
          </span>
          <span>
            The only amounts we haven&apos;t included are the money you&apos;ll need to
            save for annual home maintenance/repairs or the costs of home
            improvements. To see how much home you can afford including these
            costs, take a look at the Better home affordability calculator.
          </span>
          <span>
            Fun fact: Property tax rates are extremely localized, so two homes
            of roughly the same size and quality on either side of a municipal
            border could have very different tax rates. Buying in an area with a
            lower property tax rate may make it easier for you to afford a
            higher-priced home.
          </span>
        </div>
      </div>

      <div className="pt-8 md:px-24 px-12 mt-14 font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Do you know your property tax rate?
        </h3>
        <div className="flex flex-col gap-4 text-gray-500">
          <span>
            While exact property tax rates vary by county, it can be helpful to
            look at taxes on the state level to get an idea for taxes in your
            state. Here&apos;s a helpful chart from Forbes breaking down the Census
            Bureau&apos;s 2021 American Community Survey 5-year estimate:
          </span>
        </div>
      </div>

      <PropertyTaxTable />

      <div className="pt-8 md:px-24 px-12 mt-14  font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          How is Better&apos;s mortgage calculator different?
        </h3>
        <div className="flex flex-col gap-4 text-gray-500">
          <span className="text-2xl text-black font-semibold font-roboto mt-6">
            This mortgage calculator shows your payments with taxes and
            insurance.
          </span>
          <div className="flex flex-col gap-4 ">
            <span>
              The property taxes you contribute are used to finance the services
              provided by your local government to the community. These services
              encompass schools, libraries, roads, parks, water treatment,
              police, and fire departments. Even after your mortgage has been
              fully paid, you will still need to pay property taxes. If you
              neglect your property taxes, you run the risk of losing your home
              to your local tax authority.
            </span>
            <span>
              Your lender will usually require you to have homeowners insurance
              while you&apos;re settling your mortgage. This is a common practice
              among lenders because they understand that nobody wants to
              continue paying a mortgage on a home that&apos;s been damaged or
              destroyed.
            </span>
            <span>
              Here&apos;s an interesting fact: Once you fully own your home, the
              choice to maintain homeowners insurance is entirely up to you.
              However, to ensure your home is protected against damages caused
              by fires, lightning strikes, and natural disasters that are common
              in your area, it is highly recommended to keep it. Therefore,
              always factor in these costs when using a Mortgage Calculator.
            </span>
          </div>
          <span className="text-2xl text-black font-semibold font-roboto mt-6">
            This mortgage calculator shows your mortgage costs with PMI
          </span>
          <div className="flex flex-col gap-4">
            <span>
              PMI, an abbreviation for private mortgage insurance, aids
              potential homeowners in qualifying for a mortgage without the
              necessity of a 20% down payment. By opting for a lower down
              payment and choosing a mortgage with PMI, you can purchase a home
              sooner, begin accruing equity, and keep cash available for future
              needs. This can all be calculated using this Mortgage Calculator.
            </span>
            <span>
              Choosing a mortgage with PMI is a popular option: 71% of
              first-time homebuyers had a down payment of less than 20% in July
              2021. In 2020, the median down payment for first-time homebuyers
              was just 7%, and it hasn&apos;t risen above 10% since 1989.
            </span>
            <span>
              PMI is automatically removed from conventional mortgages once your
              home equity reaches 22%. Alternatively, you can request the
              removal of PMI once you&apos;ve accumulated at least 20% home equity.
            </span>
          </div>
          <span className="text-2xl text-black font-semibold font-roboto mt-6">
            This mortgage calculator includes HOA fees
          </span>
          <div className="flex flex-col gap-4">
            <span>
              Homeowners association (“HOA”) fees are typically charged directly
              by a homeowners association, but as HOA fees come part and parcel
              with condos, townhomes, and planned housing developments, they&apos;re
              an essential factor to consider when calculating your mortgage
              costs.
            </span>
            <span>
              Homes that share structural elements, such as roofs and walls, or
              community amenities like landscaping, pools, or BBQ areas, often
              require homeowners to pay HOA fees for the maintenance of these
              shared features. It&apos;s important to factor in these costs during
              your budget planning stage, especially considering that HOA fees
              typically increase annually. HOAs may also charge additional fees
              known as &apos;special assessments&apos; to cover unexpected expenses from
              time to time.
            </span>
          </div>
        </div>
      </div>

      <div className="pt-8 md:px-24 px-12 mt-14 font-poppins border-t border-gray-300 bg-white">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          How to reduce your monthly mortgage payments?
        </h3>
        <div className="flex flex-col gap-4 text-gray-500">
          <span className="text-md  text-gray-500 font-semibold font-roboto mt-6">
            The lower the purchase price of the home, the lower your loan amount
            will be. But if the seller is less than willing to cut you a deal,
            you have other options.
          </span>
          <div className="flex flex-col gap-4 ">
            <span className="text-2xl text-black font-semibold">
              Extend the length of your mortgage
            </span>
            <span>
              The more time you have to pay off the mortgage, the less each
              monthly mortgage payment will be. In lender-speak, &apos;extending the
              length of your mortgage&apos; is known as &apos;increasing your loan term&apos;.
              This is why people often choose a 30-year fixed rate mortgage over
              one with a 15- or 20-year term.
            </span>
          </div>
          <span className="text-2xl text-black font-semibold font-roboto mt-6">
            Increase your down payment
          </span>
          <div className="flex flex-col gap-4">
            <span>
              The smaller the amount of your mortgage, the smaller your monthly
              mortgage payments will be. If you&apos;re able to put at least 20% of
              the home price towards your down payment, you&apos;ll be able to avoid
              PMI (private mortgage insurance). Even if you can&apos;t afford a
              complete 20% down payment, boosting your down payment will help
              you get PMI removed sooner. In fact, boosting your down payment by
              5% can lower your monthly PMI fees.
            </span>
          </div>
          <span className="text-2xl text-black font-semibold font-roboto mt-6">
            Get a lower interest rate
          </span>
          <div className="flex flex-col gap-4">
            <span>
              Increasing your down payment can be one way to help you qualify
              for a lower interest rate. The amount of your down payment
              compared to the total amount of the loan is called your
              loan-to-value ratio (LTV).
            </span>
            <span>
              Depending on your loan amount, a lower LTV may increase the
              likelihood of you being offered a low interest rate. If you intend
              on keeping your home for a while, you could consider buying points
              to reduce your interest rate. Buying points essentially means you
              agree to pay more upfront costs in exchange for a lower monthly
              payment.
            </span>
            <span>
              If you think you may sell or refinance the home in the first 5-10
              years of the mortgage, you could consider an adjustable-rate
              mortgage (ARM). An ARM offers a lower fixed interest rate for a
              set introductory period—typically 5, 7, or 10 years. Once the set
              introductory period ends, the interest rate adjusts (interest rate
              may increase after consummation). The introductory interest rate
              for ARMs is typically lower than the interest rate for a
              conventional fixed-rate mortgage which could make it a great way
              to save on interest if you know you won&apos;t keep the mortgage for
              long.
            </span>
            <span>
              If you&apos;re not planning on buying a home for a while, improving
              your credit score is a tried and true way of increasing your
              chances of qualifying for a lower interest rate. By reducing your
              debt-to-income ratio (DTI), lenders will see that you comfortably
              afford your mortgage and may be more willing to offer a lower
              interest rate.
            </span>
          </div>
        </div>
      </div>
      <div className="pt-8 mt-14 md:px-24 px-12 font-poppins border-t border-gray-300 bg-white">
        <div className="flex flex-col">
          <span className="text-4xl text-black font-semibold font-roboto mt-6">
            How much home can I afford?
          </span>
          <span className="text-md  text-gray-500 font-semilight font-poppins mt-6">
            Once again, the easiest way to do this is with a calculator! To know
            if a home is in your budget, try out our home affordability
            calculator. This calculator will take a few inputs from you, like
            income and savings, and let you know the maximum amount of home you
            can afford.
          </span>
        </div>
      </div>

      <div className="pt-8 md:px-24 px-12 mt-14  font-poppins border-t border-gray-300 bg-white">
        <div className="flex flex-col">
          <span className="text-4xl text-black font-semibold font-roboto mt-6">
            Next steps to buying a house
          </span>
          <span className="text-md  text-gray-500 font-semilight font-poppins mt-6">
            There are 8 steps to buying a house and by using this calculator
            you&apos;ve completed step 2 calculating your home affordability and
            maybe even step 1 getting your finances in order.
          </span>
          <span className="text-md  text-gray-500 font-semilight font-poppins mt-6">
            The next step is getting pre-approved. A mortgage pre-approval with
            Better Mortgage takes as little as 3-minutes and doesn&apos;t impact your
            credit score. It&apos;s a free, no-commitment way to see how much home
            you can buy, the mortgages you qualify for, and the range of
            interest rates you&apos;ll be offered.
          </span>
          <span className="text-md  text-gray-500 font-semilight font-poppins mt-6">
            If you&apos;re ready to buy a home now, our definitive home buying
            checklist can walk you through everything you need to know to get
            the home you want. With your Better Mortgage pre-approval letter in
            hand, you&apos;ll be able to show sellers and real estate agents that you
            mean business—giving you an edge over homebuyers that don&apos;t have
            this kind of proof that they&apos;re financially ready to purchase. And
            by working with an agent from Better Real Estate and funding with
            Better Mortgage, you&apos;ll save $2,000 on closing costs, and save up to
            $8,200 on average over the life of your loan.
          </span>
        </div>
      </div>

      <div className="pt-8 mt-14 px-24 font-poppins border-t border-gray-300 bg-white" />

      <div className="flex flex-col gap-5 mb-7">
        <span className="text-2xl font-semibold ml-28  md:ml-32">More resources</span>
        <MortgageCards />
      </div>
                <Better />
                <Footer />
    </div>
  );
};

export default MortgageCalculator;
