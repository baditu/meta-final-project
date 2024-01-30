import ReviewElement from "./ReviewElement";
import { Link } from "react-router-dom";

const ReviewForm = ({ formState, prevStep, onSubmit, sendFormMock }) => {
  const { values } = formState;

  return (
    <>
      {(sendFormMock === false && (
        <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md">
          <h1 className="text-2xl font-semibold mb-6 text-text-color-1">
            You are almost done...
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-white">
            Please review the information
          </h2>
          <h3 className="text-xl text-white">Reservation Information</h3>
          <div className="border-t border-gray-300 mt-2 mb-4"></div>
          <ReviewElement
            title={"Reservation Date: "}
            value={values.reservationDate}
          />
          <ReviewElement
            title={"eserved Time: "}
            value={values.reservationTime}
          />
          <ReviewElement
            title={"Number of Guests: "}
            value={values.numberOfPeople}
          />
          <ReviewElement title={"Occasion: "} value={values.occasion} />
          <ReviewElement
            title={"Special Request: "}
            value={values.specialRequest}
          />
          <h3 className="text-xl text-white mt-4">Personal Information</h3>
          <div className="border-t border-gray-300 mt-2 mb-4"></div>
          <ReviewElement title={"First Name: "} value={values.firstName} />
          <ReviewElement title={"Last Name: "} value={values.lastName} />
          <ReviewElement title={"Email: "} value={values.email} />
          <ReviewElement title={"Phone: "} value={values.phone} />
          <ReviewElement
            title={"Send confirmation via: "}
            value={values.confirmation}
          />
          <div className="flex justify-between mt-4">
            <button
              className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
              onClick={onSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )) || (
        <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-6 text-text-color-1">
            You have successfully reserved your table!
          </h1>
          <Link key={`link-to-${"/"}`} to={`${"/"}`}>
            <button className="w-1/2 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600">
              Back Home
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ReviewForm;
