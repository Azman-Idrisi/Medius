import React from "react";

const Better = () => {
  return (
    <section className={`hidden md:block md:mt-[5rem] px-4`}>
      <div className="max-w-[80rem] mx-auto py-8 font-roboto flex flex-col items-center text-center md:text-left">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-green-700">Better</h1>
          <p className="text-base text-gray-700 mt-2">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          
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
  );
};

export default Better;
