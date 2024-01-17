const SpecialCard = (props) => {
  const { title, price, description, image } = props.specialty;

  console.log(image);

  return (
    <div className="bg-light-color-2 border p-4 rounded-lg">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full h-1/2" />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{`$${price}`}</p>
      <p className="text-gray-500 text-sm my-4">{description}</p>
      <button className="text-yellow-600 text-sm flex items-center">
        Order a delivery
      </button>
    </div>
  );
};

export default SpecialCard;
