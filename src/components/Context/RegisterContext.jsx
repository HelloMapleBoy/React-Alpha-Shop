import { createContext } from "react";

const initialRegister = {
  creditName: null,
  creditNumber: null,
  creditExp: null,
  creditCCV: null,
};

export const RegisterContext = createContext(initialRegister);
