import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <article className="bg-background-color-2 h-1/3 flex justify-between p-4 px-20 relative">
      <section className="flex flex-col justify-center max-w-sm md:w-1/2 lg:ml-20">
        <h1 className="text-text-color-1 font-markazi text-2xl sm:text-4xl">
          Little Lemon
        </h1>
        <h2 className="text-white font-markazi text-lg sm:text-xl">Chicago</h2>
        <p className="text-white pt-3">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <button className="bg-text-color-1 font-bold py-2 px-4 rounded-xl text-sm mt-4 hover:bg-light-color-2">
          <Link
            className="text-black font-bold"
            key={`link-to-reservation`}
            to={"/reservations"}
          >
            Reserve a Table
          </Link>
        </button>
      </section>
      <img
        src="/images/Food.jpg"
        alt="iamge-for-hero-page"
        className="rounded-xl w-1/3 max-w-96 max-h-96 hidden md:block border-black border-2 absolute top-10 md:right-10 lg:right-1/5 xl:right-1/5"
      />
    </article>
  );
};

export default HeroSection;
