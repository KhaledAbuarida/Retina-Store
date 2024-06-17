import { API_BASE_URL } from "../constants/apiBaseUrl";

interface loginParams {
  email: string;
  password: string;
}
export const loginAPI = async ({ email, password }: loginParams) => {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  return { response: data };
};
