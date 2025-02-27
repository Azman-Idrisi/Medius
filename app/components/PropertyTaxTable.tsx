"use client";

import React, { useState } from "react";

interface PropertyTaxData {
  state: string;
  medianEffectiveRate: string;
  meanEffectiveRate: string;
  medianHomeValue: string;
  medianTaxesPaid: string;
}

const PropertyTaxTable: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const propertyTaxData: PropertyTaxData[] = [
    {
      state: "AL",
      medianEffectiveRate: "0.41%",
      meanEffectiveRate: "0.40%",
      medianHomeValue: "$157,100",
      medianTaxesPaid: "$646",
    },
    {
      state: "AK",
      medianEffectiveRate: "1.23%",
      meanEffectiveRate: "1.04%",
      medianHomeValue: "$282,800",
      medianTaxesPaid: "$3,464",
    },
    {
      state: "AZ",
      medianEffectiveRate: "0.62%",
      meanEffectiveRate: "0.63%",
      medianHomeValue: "$265,600",
      medianTaxesPaid: "$1,648",
    },
    {
      state: "AR",
      medianEffectiveRate: "0.62%",
      meanEffectiveRate: "0.64%",
      medianHomeValue: "$142,100",
      medianTaxesPaid: "$878",
    },
    // Additional states
    {
      state: "CA",
      medianEffectiveRate: "0.75%",
      meanEffectiveRate: "0.75%",
      medianHomeValue: "$573,200",
      medianTaxesPaid: "$4,279",
    },
    {
      state: "CO",
      medianEffectiveRate: "0.51%",
      meanEffectiveRate: "0.55%",
      medianHomeValue: "$397,500",
      medianTaxesPaid: "$2,017",
    },
    {
      state: "CT",
      medianEffectiveRate: "2.15%",
      meanEffectiveRate: "1.79%",
      medianHomeValue: "$286,700",
      medianTaxesPaid: "$6,153",
    },
    {
      state: "DE",
      medianEffectiveRate: "0.58%",
      meanEffectiveRate: "0.61%",
      medianHomeValue: "$269,700",
      medianTaxesPaid: "$1,570",
    },
    {
      state: "DC",
      medianEffectiveRate: "0.57%",
      meanEffectiveRate: "0.62%",
      medianHomeValue: "$635,900",
      medianTaxesPaid: "$3,641",
    },
    {
      state: "FL",
      medianEffectiveRate: "0.86%",
      meanEffectiveRate: "0.91%",
      medianHomeValue: "$248,700",
      medianTaxesPaid: "$2,143",
    },
    {
      state: "GA",
      medianEffectiveRate: "0.90%",
      meanEffectiveRate: "0.92%",
      medianHomeValue: "$206,700",
      medianTaxesPaid: "$1,850",
    },
    {
      state: "HI",
      medianEffectiveRate: "0.29%",
      meanEffectiveRate: "0.32%",
      medianHomeValue: "$662,100",
      medianTaxesPaid: "$1,893",
    },
    {
      state: "ID",
      medianEffectiveRate: "0.63%",
      meanEffectiveRate: "0.67%",
      medianHomeValue: "$266,500",
      medianTaxesPaid: "$1,682",
    },
    {
      state: "IL",
      medianEffectiveRate: "2.23%",
      meanEffectiveRate: "2.08%",
      medianHomeValue: "$212,600",
      medianTaxesPaid: "$4,744",
    },
    {
      state: "IN",
      medianEffectiveRate: "0.83%",
      meanEffectiveRate: "0.84%",
      medianHomeValue: "$158,500",
      medianTaxesPaid: "$1,308",
    },
    {
      state: "IA",
      medianEffectiveRate: "1.57%",
      meanEffectiveRate: "1.52%",
      medianHomeValue: "$160,700",
      medianTaxesPaid: "$2,522",
    },
    {
      state: "KS",
      medianEffectiveRate: "1.43%",
      meanEffectiveRate: "1.34%",
      medianHomeValue: "$164,800",
      medianTaxesPaid: "$2,355",
    },
    {
      state: "KY",
      medianEffectiveRate: "0.85%",
      meanEffectiveRate: "0.83%",
      medianHomeValue: "$155,100",
      medianTaxesPaid: "$1,320",
    },
    {
      state: "LA",
      medianEffectiveRate: "0.57%",
      meanEffectiveRate: "0.56%",
      medianHomeValue: "$174,000",
      medianTaxesPaid: "$983",
    },
    {
      state: "ME",
      medianEffectiveRate: "1.28%",
      meanEffectiveRate: "1.24%",
      medianHomeValue: "$212,100",
      medianTaxesPaid: "$2,722",
    },
    {
      state: "MD",
      medianEffectiveRate: "1.07%",
      meanEffectiveRate: "1.05%",
      medianHomeValue: "$338,500",
      medianTaxesPaid: "$3,633",
    },
    {
      state: "MA",
      medianEffectiveRate: "1.20%",
      meanEffectiveRate: "1.14%",
      medianHomeValue: "$424,700",
      medianTaxesPaid: "$5,091",
    },
    {
      state: "MI",
      medianEffectiveRate: "1.48%",
      meanEffectiveRate: "1.38%",
      medianHomeValue: "$172,100",
      medianTaxesPaid: "$2,551",
    },
    {
      state: "MN",
      medianEffectiveRate: "1.11%",
      meanEffectiveRate: "1.11%",
      medianHomeValue: "$250,200",
      medianTaxesPaid: "$2,767",
    },
    {
      state: "MS",
      medianEffectiveRate: "0.79%",
      meanEffectiveRate: "0.67%",
      medianHomeValue: "$133,000",
      medianTaxesPaid: "$1,052",
    },
    {
      state: "MO",
      medianEffectiveRate: "0.98%",
      meanEffectiveRate: "1.01%",
      medianHomeValue: "$171,800",
      medianTaxesPaid: "$1,676",
    },
    {
      state: "MT",
      medianEffectiveRate: "0.83%",
      meanEffectiveRate: "0.74%",
      medianHomeValue: "$263,700",
      medianTaxesPaid: "$2,189",
    },
    {
      state: "NE",
      medianEffectiveRate: "1.68%",
      meanEffectiveRate: "1.63%",
      medianHomeValue: "$174,100",
      medianTaxesPaid: "$2,916",
    },
    {
      state: "NV",
      medianEffectiveRate: "0.55%",
      meanEffectiveRate: "0.59%",
      medianHomeValue: "$315,900",
      medianTaxesPaid: "$1,736",
    },
    {
      state: "NH",
      medianEffectiveRate: "2.09%",
      meanEffectiveRate: "1.93%",
      medianHomeValue: "$288,700",
      medianTaxesPaid: "$6,036",
    },
    {
      state: "NJ",
      medianEffectiveRate: "2.47%",
      meanEffectiveRate: "2.24%",
      medianHomeValue: "$355,700",
      medianTaxesPaid: "$8,797",
    },
    {
      state: "NM",
      medianEffectiveRate: "0.80%",
      meanEffectiveRate: "0.67%",
      medianHomeValue: "$184,800",
      medianTaxesPaid: "$1,470",
    },
    {
      state: "NY",
      medianEffectiveRate: "1.73%",
      meanEffectiveRate: "1.40%",
      medianHomeValue: "$340,600",
      medianTaxesPaid: "$5,884",
    },
    {
      state: "NC",
      medianEffectiveRate: "0.80%",
      meanEffectiveRate: "0.82%",
      medianHomeValue: "$197,500",
      medianTaxesPaid: "$1,583",
    },
    {
      state: "ND",
      medianEffectiveRate: "1.00%",
      meanEffectiveRate: "0.98%",
      medianHomeValue: "$209,900",
      medianTaxesPaid: "$2,092",
    },
    {
      state: "OH",
      medianEffectiveRate: "1.53%",
      meanEffectiveRate: "1.59%",
      medianHomeValue: "$159,900",
      medianTaxesPaid: "$2,447",
    },
    {
      state: "OK",
      medianEffectiveRate: "0.90%",
      meanEffectiveRate: "0.89%",
      medianHomeValue: "$150,800",
      medianTaxesPaid: "$1,351",
    },
    {
      state: "OR",
      medianEffectiveRate: "0.93%",
      meanEffectiveRate: "0.93%",
      medianHomeValue: "$362,200",
      medianTaxesPaid: "$3,352",
    },
    {
      state: "PA",
      medianEffectiveRate: "1.53%",
      meanEffectiveRate: "1.49%",
      medianHomeValue: "$197,300",
      medianTaxesPaid: "$3,022",
    },
    {
      state: "RI",
      medianEffectiveRate: "1.53%",
      meanEffectiveRate: "1.40%",
      medianHomeValue: "$292,600",
      medianTaxesPaid: "$4,483",
    },
    {
      state: "SC",
      medianEffectiveRate: "0.56%",
      meanEffectiveRate: "0.57%",
      medianHomeValue: "$181,800",
      medianTaxesPaid: "$1,024",
    },
    {
      state: "SD",
      medianEffectiveRate: "1.24%",
      meanEffectiveRate: "1.17%",
      medianHomeValue: "$187,800",
      medianTaxesPaid: "$2,331",
    },
    {
      state: "TN",
      medianEffectiveRate: "0.66%",
      meanEffectiveRate: "0.67%",
      medianHomeValue: "$193,700",
      medianTaxesPaid: "$1,270",
    },
    {
      state: "TX",
      medianEffectiveRate: "1.74%",
      meanEffectiveRate: "1.68%",
      medianHomeValue: "$202,600",
      medianTaxesPaid: "$3,520",
    },
    {
      state: "UT",
      medianEffectiveRate: "0.58%",
      meanEffectiveRate: "0.57%",
      medianHomeValue: "$339,700",
      medianTaxesPaid: "$1,967",
    },
    {
      state: "VT",
      medianEffectiveRate: "1.90%",
      meanEffectiveRate: "1.83%",
      medianHomeValue: "$240,600",
      medianTaxesPaid: "$4,570",
    },
    {
      state: "VA",
      medianEffectiveRate: "0.82%",
      meanEffectiveRate: "0.88%",
      medianHomeValue: "$295,500",
      medianTaxesPaid: "$2,420",
    },
    {
      state: "WA",
      medianEffectiveRate: "0.94%",
      meanEffectiveRate: "0.87%",
      medianHomeValue: "$397,600",
      medianTaxesPaid: "$3,752",
    },
    {
      state: "WV",
      medianEffectiveRate: "0.59%",
      meanEffectiveRate: "0.57%",
      medianHomeValue: "$128,800",
      medianTaxesPaid: "$756",
    },
    {
      state: "WI",
      medianEffectiveRate: "1.73%",
      meanEffectiveRate: "1.61%",
      medianHomeValue: "$200,400",
      medianTaxesPaid: "$3,472",
    },
    {
      state: "WY",
      medianEffectiveRate: "0.61%",
      meanEffectiveRate: "0.56%",
      medianHomeValue: "$237,900",
      medianTaxesPaid: "$1,442",
    },
  ];

  
  const displayData = showAll ? propertyTaxData : propertyTaxData.slice(0, 4);

  
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="p-3 text-left font-semibold border-r border-green-700">
                State
              </th>
              <th className="p-3 text-center font-semibold border-r border-green-700">
                Median Effective Property Tax Rate
              </th>
              <th className="p-3 text-center font-semibold border-r border-green-700">
                Mean Effective Property Tax Rate
              </th>
              <th className="p-3 text-center font-semibold border-r border-green-700">
                Median Home Value
              </th>
              <th className="p-3 text-center font-semibold">
                Median Property Taxes Paid
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((item, index) => (
              <tr
                key={item.state}
                className={
                  index % 2 === 0
                    ? "bg-green-50 hover:bg-green-100"
                    : "bg-white hover:bg-green-100"
                }
              >
                <td className="p-3 border-r border-green-100 text-center text-gray-600 font-medium">
                  {item.state}
                </td>
                <td className="p-3 border-r border-green-100 text-gray-500 text-center">
                  {item.medianEffectiveRate}
                </td>
                <td className="p-3 border-r border-green-100 text-gray-500 text-center">
                  {item.meanEffectiveRate}
                </td>
                <td className="p-3 border-r border-green-100 text-gray-500 text-center">
                  {item.medianHomeValue}
                </td>
                <td className="p-3 text-gray-500 text-center">
                  {item.medianTaxesPaid}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={toggleShowAll}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default PropertyTaxTable;
