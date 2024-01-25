import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../utils/constants";

const Testimonials = () => {
  return (
    <article className="bg-background-color-2 flex flex-col w-full items-center py-10">
      <h1 className="text-text-color-1 font-markazi text-5xl pb-10">
        Testimonials
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {(testimonials ?? []).map((testimonial, index) => {
          return (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Testimonials;
