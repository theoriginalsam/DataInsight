import React from "react";
import List from "./List";

const ServiceList: React.FC = () => (
  <div className="mx-[-12px] flex flex-wrap">
    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
      <List text="IT Training and Staffing" />
      <List text="Healthcare Staffing" />
      <List text="Big Data and ML Solutions" />
    </div>
    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
      <List text="Telehealth Services" />
      <List text="Genomic Clinical Research" />
      <List text="Web Development" />
    </div>
  </div>
);

export default ServiceList;
