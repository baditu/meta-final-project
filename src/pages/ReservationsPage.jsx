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
  reservationTime: "",
  numberOfPeople: "",
  occasion: "",
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

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

  switch (step) {
    case 1:
      return (
        <BookingForm
          formState={formState}
          handleChange={handleChange}
          nextStep={nextStep}
          touched={touched}
          onBlur={onBlur}
        />
      );
    case 2:
      return (
        <PersonalInfoForm
          formState={formState}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          touched={touched}
          onBlur={onBlur}
        />
      );
    case 3:
      return (
        <ReviewForm
          formState={formState}
          prevStep={prevStep}
          onSubmit={onSubmit}
          sendFormMock={sendFormMock}
        />
      );
    default:
      return null;
  }
};

export default ReservationsPage;
