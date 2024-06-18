import { createContext, useContext } from "react";

interface authContextType {
  token: string | null;
  userName: string | null;
  login: (token: string, userName: string) => void;
}

export const authContext = createContext<authContextType>({
  token: null,
  login: () => {},
  userName: null,
});

export const useAuth = () => useContext(authContext);
