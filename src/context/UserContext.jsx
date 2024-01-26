import React, { useMemo, createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "./UserReducer";

const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
