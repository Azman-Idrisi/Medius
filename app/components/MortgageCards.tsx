import React from 'react';
import { Calculator, ChevronRight, BarChart, FileCheck } from 'lucide-react';

// Define proper types for the Card component props
interface CardProps {
  icon: React.ReactNode;
  title: string;
  linkText: string;
  subText: string;
}

// Reusable Card component with proper type definition
const Card: React.FC<CardProps> = ({ icon, title, linkText, subText }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col flex-1">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {title}
      </h3>
      <div className="mt-auto">
        <a href="#" className="inline-flex items-center text-green-600 font-medium">
          {linkText}
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
        {subText && (
          <p className="text-sm text-gray-500 mt-2">{subText}</p>
        )}
      </div>
    </div>
  );
};

const MortgageCards: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop view - cards in a row */}
      <div className="hidden md:flex md:flex-row md:gap-4 md:justify-between">
        <Card 
          icon={<FileCheck className="w-6 h-6 text-green-600" />}
          title="Get pre-approved to see how much you can borrow"
          linkText="Get started"
          subText="Won't impact your credit"
        />
        <Card 
          icon={<BarChart className="w-6 h-6 text-green-600" />}
          title="See today's rates in your area"
          linkText="See rates"
          subText=""
        />
        <Card 
          icon={<Calculator className="w-6 h-6 text-green-600" />}
          title="Find out your max homebuying budget"
          linkText="Try our mortgage calculator"
          subText=""
        />
      </div>

      {/* Mobile view - stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        <Card 
          icon={<FileCheck className="w-6 h-6 text-green-600" />}
          title="Get pre-approved to see how much you can borrow"
          linkText="Get started"
          subText="Won't impact your credit"
        />
        <Card 
          icon={<BarChart className="w-6 h-6 text-green-600" />}
          title="See today's rates in your area"
          linkText="See rates"
          subText=""
        />
        <Card 
          icon={<Calculator className="w-6 h-6 text-green-600" />}
          title="Find out your max homebuying budget"
          linkText="Try our mortgage calculator"
          subText=""
        />
      </div>
    </div>
  );
};

export default MortgageCards;