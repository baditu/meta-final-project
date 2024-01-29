import { useState } from "react";

const PersonalInfoForm = ({
  formState,
  handleChange,
  nextStep,
  prevStep,
  onBlur,
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formState?.values?.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formState?.values?.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formState?.values?.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState?.values?.email)) {
      errors.email = "Invalid email address";
    }

    if (!formState?.values?.phone) {
      errors.phone = "Phone is required";
    } else if (formState?.values?.phone.length < 10) {
      errors.phone = "Phone must be at least 10 digits";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleContinue = () => {
    console.log("here");
    const isValid = validateForm();

    console.log(isValid);

    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md">
      <h1 className="text-2xl font-semibold mb-6 text-text-color-1">
        Personal information
      </h1>
      <form className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="first-name"
          >
            First Name *
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="text"
            id="first-name"
            required
            name="firstName"
            onChange={(e) => handleChange(e.target)}
            onBlur={validateForm}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="last-name"
          >
            Last Name *
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="text"
            id="last-name"
            name="lastName"
            required
            onChange={(e) => handleChange(e.target)}
            onBlur={validateForm}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="last-name"
          >
            Email *
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="email"
            id="last-name"
            name="email"
            required
            onChange={(e) => handleChange(e.target)}
            onBlur={validateForm}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="last-name"
          >
            Phone *
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="phone"
            id="last-name"
            name="phone"
            required
            onChange={(e) => handleChange(e.target)}
            onBlur={validateForm}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="text-white flex items-center space-x-2">
            <span>Please send me a confirmation via:</span>
          </label>
          <div>
            <input
              type="radio"
              className="form-radio"
              name="confirmation"
              value="Email"
              onChange={(e) => handleChange(e.target)}
              onBlur={onBlur}
            />
            <label className="text-white"> Email</label>
          </div>
          <div>
            <input
              type="radio"
              className="form-radio"
              name="confirmation"
              value="Phone"
              onChange={(e) => handleChange(e.target)}
              onBlur={onBlur}
            />
            <label className="text-white"> Phone</label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            className="w-1/3 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
            onClick={handleContinue}
            disabled={
              formState?.values?.firstName === "" ||
              formState?.values?.lastName === "" ||
              formState?.values?.email === "" ||
              formState?.values?.phone === ""
            }
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
