const HeroSection = () => {
  return (
    <article className="bg-background-color-2 w-full h-1/3 flex justify-between p-4 px-20">
      <section className="lex flex-col justify-center max-w-sm md:w-1/2">
        <h1 className="text-text-color-1 font-markazi text-4xl">
          Little Lemon
        </h1>
        <h2 className="text-white font-markazi text-xl">Chicago</h2>
        <p className="text-white pt-3">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="bg-text-color-1 font-bold py-2 px-4 rounded-xl text-sm mt-4 hover:bg-light-color-2">
          Reserve a Table
        </button>
      </section>
      <img
        src="/images/Food.jpg"
        alt="iamge-for-hero-page"
        className="rounded-xl w-max h-full hidden md:block border-black border-2"
      />
    </article>
  );
};

export default HeroSection;
