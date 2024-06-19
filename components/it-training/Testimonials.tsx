const testimonials = [
  {
    name: "John Doe",
    feedback: "The best IT consulting service we have ever used.",
  },
  {
    name: "Jane Smith",
    feedback: "Excellent staffing solutions, highly recommend!",
  },
];

const Testimonial = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">
        What Our Clients Say
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="mt-4 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
