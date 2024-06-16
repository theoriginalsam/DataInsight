import React from "react";
import Breadcrumb from "../breadCrumbs";

interface BreadcrumbSectionProps {
  pageName: string;
  description: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  pageName,
  description,
}) => (
  <div className="bg-primary text-white">
    <Breadcrumb pageName={pageName} description={description} />
  </div>
);

export default BreadcrumbSection;
