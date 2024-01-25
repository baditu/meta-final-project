import { useState } from "react";
import BookingForm from "../components/BookingForm";
import PersonalInfoForm from "../components/PersonalnfoForm";
import ReviewForm from "../components/ReviewForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reservationDate: "",
  reservationTime: "17:00",
  numberOfPeople: "1",
  occasion: "Birthday",
  specialRequest: "",
  confirmation: "",
};

const initialState = {
  values: initialValues,
  isLoading: false,
  error: null,
};

const ReservationsPage = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState(initialState);
  const [sendFormMock, setSendFormMock] = useState(false);
  const [touched, setTouched] = useState(initialValues);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (target) => {

    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onBlur = (target) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const onSubmit = async () => {
    setFormState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSendFormMock(true);

      setTouched(initialValues);
      setFormState(initialState);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  console.log(sendFormMock)

  switch (step) {
    case 1:
      return (
        <div className="flex flex-col justify-center h-screen">
          <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md mb-8">
            <h1 className="text-text-color-1 text-3xl font-extrabold text-center">
              {"Reservations"}
            </h1>
          </div>
          <BookingForm
            formState={formState}
            handleChange={handleChange}
            nextStep={nextStep}
            touched={touched}
            onBlur={onBlur}
          />
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col justify-center h-screen">
          <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md mb-8">
            <h1 className="text-text-color-1 text-3xl font-extrabold text-center">
              {"Reservations"}
            </h1>
          </div>
          <PersonalInfoForm
            formState={formState}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            touched={touched}
            onBlur={onBlur}
          />
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col justify-center h-screen">
          <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md mb-8">
            <h1 className="text-text-color-1 text-3xl font-extrabold text-center">
              {"Reservations"}
            </h1>
          </div>
          <ReviewForm
            formState={formState}
            prevStep={prevStep}
            onSubmit={onSubmit}
            sendFormMock={sendFormMock}
          />
        </div>
      );
    default:
      return null;
  }
};

export default ReservationsPage;
