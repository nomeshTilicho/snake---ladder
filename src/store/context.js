import React, { useContext } from "react";
import useMyReducer from "./reducer";

export const StateContext = React.createContext();
export const UpdateStateContext = React.createContext();

export function useGlbalState() {
  return useContext(StateContext);
}

export function useDispatchGlobalState() {
  return useContext(UpdateStateContext);
}

export default function StateContextProvider({ children }) {
  const [state, dispatch] = useMyReducer();
  return (
    <StateContext.Provider value={state}>
      <UpdateStateContext.Provider value={dispatch}>
        {children}
      </UpdateStateContext.Provider>
    </StateContext.Provider>
  );
}
