const services = [
  {
    title: "IT Staffing",
    description:
      "We provide experienced IT professionals to meet your staffing needs.",
  },
  {
    title: "Consulting Services",
    description:
      "Our consultants offer expert advice to optimize your IT strategy.",
  },
  {
    title: "Training Programs",
    description:
      "We offer training programs to upskill your team in the latest technologies.",
  },
];

const ServiceList = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceList;
