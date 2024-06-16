import { FC, PropsWithChildren, useState } from "react";
import { authContext } from "./AuthContext";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <authContext.Provider value={{ token }}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
