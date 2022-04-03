import React, { createContext, useEffect, useReducer } from "react";
import { appReducer, initialState, initializer, LOCAL_STATE_KEY } from "./reducer";

export const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initializer);
  console.log('State: ', state)
  useEffect(() => {
    localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

