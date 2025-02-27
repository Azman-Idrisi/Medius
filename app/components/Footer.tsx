import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="h-auto mt-0 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-gray-600">
        
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

        
        <div className="space-y-4 mb-8 border-b border-gray-200 pb-6">
          <p className="text-xs sm:text-sm leading-tight">
            *Better Mortgage&apos;s One Day Mortgage® promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. See{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              One Day Mortgage® Terms and Conditions
            </a>
            .
          </p>
          <p className="text-xs sm:text-sm leading-tight">
            *Better Mortgage&apos;s One Day HELOC® promotion offers qualified
            customers who provide certain required financial
            information/documentation within 4 hours of locking a rate on a
            HELOC loan the opportunity to receive an underwriting determination
            within 24 hours. See{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              One Day HELOC® Terms and Conditions
            </a>
            .
          </p>
          <p className="text-xs sm:text-sm leading-tight">
            *Assumes borrowers are eligible for the Automated Valuation Model
            (AVM) to calculate their home value. Funding timelines may vary.
          </p>
        </div>

      
        <div className="space-y-4 text-xs sm:text-sm leading-tight">
          <p>
            © 2025 Better Home & Finance Holding Company. Better is a family of
            companies. Better Mortgage Corporation provides home loans; Better
            Real Estate, LLC provides real estate services. All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. NMLS
            #330511.{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              NMLS Consumer Access
            </a>
            .
          </p>
          <p>
            Better Real Estate, LLC dba BRE, operating in California through its
            wholly owned subsidiary, maintains its headquarters at 325-41
            Chestnut Street, Suite 826, Philadelphia, PA 19106.{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              Full listing of license numbers
            </a>
            .
          </p>
          <p>
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              New York State Housing and Anti-Discrimination Notice
            </a>
            .
          </p>
          <p>
            Texas Real Estate Commission:{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
              Information About Brokerage Services
            </a>{" "}
            |{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-800">
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
  );
};

export default Footer;
