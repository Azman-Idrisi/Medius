import Image from "next/image";
import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  imageUrl: string;
  altText?: string;
}

const Card: FC<CardProps> = ({ title, imageUrl, altText = "Card Image" }) => {
  return (
    <div className="bg-[#F5F9F7] p-5 rounded-lg shadow-md w-full max-w-[320px]">
      <h3 className="text-2xl font-poppins font-semibold mb-6">{title}</h3>
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md mb-6">
        <ArrowRight className="text-green-700" />
      </div>
      <Image
        src={imageUrl}
        alt={altText}
        width={300}
        height={300}
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default Card;
