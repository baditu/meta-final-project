import SpecialCard from "./SpecialCard";

const highlights = [
  {
    title: "Greek salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/images/greek-salad.jpg",
  },
  {
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/images/bruchetta.svg",
  },
  {
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/images/lemon-dessert.jpg",
  },
];

const Highlights = () => {
  return (
    <article className="p-8 px-16">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-black font-bold font-markazi text-3xl">
          This week's specials!
        </h2>
        <button className="bg-text-color-1 font-bold py-2 px-4 rounded-md text-sm mt-4 hover:bg-light-color-2">
          Online Menu
        </button>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {(highlights ?? []).map((elem) => {
          console.log(elem);
          return <SpecialCard key={elem.title} specialty={elem} />;
        })}
      </section>
    </article>
  );
};

export default Highlights;
