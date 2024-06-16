import { createContext, useContext } from "react";

interface authContextType {
  token: string | null;
  // login: () => void;
  // register: () => void;
}

export const authContext = createContext<authContextType>({
  token: null,
  // login: () => {},
  // register: () => {},
});

export const useAuth = () => useContext(authContext);
