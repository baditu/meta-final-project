const TestimonialCard = (props) => {
  const { name, image, feedback } = props.testimonial;

  return (
    <article className="bg-white flex flex-col items-center w-64 h-64 p-4 space-y-4">
      <img
        className="w-32 h-auto"
        src={"/images/stars.png"}
        alt={`stars-${name}`}
      />
      <img className="w-24 h-24 rounded-full" src={image} alt={image} />
      <h2 className="font-bold">{name}</h2>
      <p className="text-center">{`"${feedback}"`}</p>
    </article>
  );
};

export default TestimonialCard;
