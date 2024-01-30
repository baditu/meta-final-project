import SpecialCard from "./SpecialCard";
import { highlights } from "../utils/constants";

const Highlights = () => {
  return (
    <article className="md:mt-48 p-8 mx-auto">
      <section className=" flex justify-between content-center mb-6">
        <h2 className="text-black font-bold font-markazi sm:text-3xl">
          This week's specials!
        </h2>
        <button className="bg-text-color-1 font-bold py-2 px-4 rounded-md text-sm hover:bg-light-color-2">
          Online Menu
        </button>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {(highlights ?? []).map((elem, index) => {
          return (
            <SpecialCard key={elem.title} specialty={elem} />
          );
        })}
      </section>
    </article>
  );
};

export default Highlights;
