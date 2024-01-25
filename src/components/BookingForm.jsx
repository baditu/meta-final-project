const BookingForm = ({ formData, handleChange, nextStep, onBlur }) => {
  return (
    <div className="bg-background-color-2 rounded-xl container mx-auto p-6 shadow-lg max-w-md">
      <h1 className="text-2xl font-semibold mb-6 text-text-color-1">
        Find a table
      </h1>
      <form className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="res-date"
          >
            Choose date *
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="date"
            id="res-date"
            min={new Date().toISOString().split("T")[0]}
            name="reservationDate"
            required
            onChange={handleChange}
            onBlur={onBlur}
          />
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="res-time"
          >
            Choose time
          </label>
          <select
            className="w-full p-2 border-gray-300 rounded"
            id="res-time"
            name="reservationTime"
            onChange={handleChange}
            onBlur={onBlur}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div>
          <label
            className="text-white  block text-sm font-medium mb-1"
            htmlFor="guests"
          >
            Number of guests
          </label>
          <input
            className="w-full p-2 border-gray-300 rounded"
            type="number"
            placeholder="1"
            name="numberOfPeople"
            min="1"
            max="10"
            id="guests"
            onChange={handleChange}
            onBlur={onBlur}
          />
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="occasion"
          >
            Occasion
          </label>
          <select
            className="w-full p-2 border-gray-300 rounded"
            id="occasion"
            name="occasion"
            onChange={handleChange}
            onBlur={onBlur}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div>
          <label
            className="text-white block text-sm font-medium mb-1"
            htmlFor="requests"
          >
            Special requests
          </label>
          <textarea
            id="requests"
            name="specialRequest"
            className="w-full p-2 border-gray-300 rounded"
            rows="3"
            onChange={handleChange}
            onBlur={onBlur}
          />
        </div>
        <button
          className="w-1/2 m-auto p-3 bg-text-color-1 rounded hover:bg-yellow-600"
          onClick={nextStep}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
