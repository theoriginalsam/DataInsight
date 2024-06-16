import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface InfoCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
        <FontAwesomeIcon icon={icon} className="h-6 w-6" />
      </div>
      <div className="mt-5">
        <p className="text-lg font-bold text-gray-700">{title}</p>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
