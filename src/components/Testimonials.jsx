import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Emily B.",
    image: "/images/Emily.JPG",
    feedback: "Nice and cozy place where you can eat the best food.",
  },
  {
    name: "Haithem M.",
    image: "/images/Haithem.JPG",
    feedback: "Exceptional service and delicious dishes!",
  },
  {
    name: "Naomi X.",
    image: "/images/Naomi.JPG",
    feedback: "Outstanding flavors and a delightful dining experience.",
  },
  {
    name: "Zack E.",
    image: "/images/Zack.JPG",
    feedback: "Fantastic ambiance and top-notch culinary offerings!",
  },
];

const Testimonials = () => {
  return (
    <article className="bg-background-color-2 flex flex-col w-full items-center py-10">
      <h1 className="text-text-color-1 font-markazi text-5xl pb-10">Testimonials</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {(testimonials ?? []).map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonials.name}
              testimonial={testimonial}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Testimonials;
