export const initialState = {
  availableTimes: [],
};

export const userReducer = (state, action) => {
  const { type, payload } = action;

  console.log("PAYLOAD: ", payload);

  switch (type) {
    case "UPDATE_AVAILABLE_TIMES":
      return {
        ...state,
        availableTimes: payload,
      };
    default:
      return state;
  }
};
