const AboutSummary = () => {
  return (
    <article
      id="about"
      className=" h-1/2 flex flex-col md:flex-row justify-around items-center p-10"
    >
      <section className="flex flex-col justify-center max-w-sm md:w-1/2">
        <h1 className="text-black font-markazi text-4xl">Little Lemon</h1>
        <h2 className="text-black font-markazi text-xl">Chicago</h2>
        <p className="text-black pt-3">
          Little Lemon in Chicago: a cozy culinary haven. Experience bold
          flavors with our locally inspired menu. From inventive appetizers to
          heartwarming mains, enjoy a memorable dining journey in our intimate
          setting
        </p>
      </section>
      <img
        className="h-auto w-96 hidden md:block"
        src="/images/AboutImage.png"
        alt="about-section"
      />
      <img
        className="m-x-auto sm:block md:hidden"
        src="/images/Mario and Adrian A.jpg"
        alt="mario-and-adrian"
      />
    </article>
  );
};

export default AboutSummary;
