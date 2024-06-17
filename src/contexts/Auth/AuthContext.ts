import { createContext, useContext } from "react";

interface authContextType {
  token: string | null;
  userName: string | null;
  login: (token: string, userName: string) => void;
  // register: () => void;
}

export const authContext = createContext<authContextType>({
  token: null,
  login: () => {},
  userName: null,
  // register: () => {},
});

export const useAuth = () => useContext(authContext);
