const OtherPageFormat = ({ title }) => {
  return (
    <article className="bg-background-color-2 w-screen h-full">
      <section className="flex flex-col justify-center items-center  p-8">
        <h1 className="text-text-color-1 text-3xl font-extrabold">{title}</h1>
        <p className="text-xl font-semibold mb-4">
          We are still working on it.
        </p>
      </section>
      <section className="bg-white w-full p-10 h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-text-color-1 text-xl font-semibold mb-4">
            This page is under construction!
          </p>
          <img className="h-96 mb-10 rounded-full" alt={`comming-soon-${title}`} src="/images/coming-soon.png" />
        </div>
      </section>
    </article>
  );
};

export default OtherPageFormat;
