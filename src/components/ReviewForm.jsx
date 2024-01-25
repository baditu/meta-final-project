const ReviewForm = ({ formState, prevStep, onSubmit, sendFormMock }) => {
  const { values } = formState;

  console.log("Values: ", values);

  return (
    <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md">
      <h1 className="text-2xl font-semibold mb-6 text-text-color-1">
        You are almost done...
      </h1>
      <h2 className="text-xl font-semibold mb-6 text-white">
        Please review the information
      </h2>
      <h3 className="text-xl text-white">Reservation Information</h3>
      <div className="border-t border-gray-300 mt-2 mb-4"></div>
      <div>
        <strong className="text-text-color-1">Reserved Date: </strong>
        {values.reservationDate}
      </div>
      <div>
        <strong className="text-text-color-1">Reserved Time: </strong>
        {values.reservationTime}
      </div>
      <div>
        <strong className="text-text-color-1">Number of Guests: </strong>
        {values.numberOfPeople}
      </div>
      <div>
        <strong className="text-text-color-1">Occasion: </strong>
        {values.ocassion}
      </div>
      <div>
        <strong className="text-text-color-1">Special Request: </strong>
        {values.specialRequest}
      </div>
      <h3 className="text-xl text-white">Personal Information</h3>
      <div className="border-t border-gray-300 mt-2 mb-4"></div>
      <div>
        <strong className="text-text-color-1">First Name: </strong>
        {values.firstName}
      </div>
      <div>
        <strong className="text-text-color-1">Last Name: </strong>
        {values.lastName}
      </div>
      <div>
        <strong className="text-text-color-1">Email: </strong>
        {values.email}
      </div>
      <div>
        <strong className="text-text-color-1">Phone: </strong> {values.phone}
      </div>
      <div>
        <strong className="text-text-color-1">Send confirmation via: </strong>
        {values.confirmation}
      </div>
      <div className="flex justify-between">
        <button
          className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
          onClick={prevStep}
        >
          Înapoi
        </button>
        <button
          className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
          onClick={() => console.log("Trimiteți formularul!")}
        >
          Trimiteți
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
