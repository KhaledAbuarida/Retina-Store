import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { loginAPI } from "../api/userAPI";
import { useState } from "react";
import { useAuth } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // states
  const [error, setError] = useState<string | null>(null);

  // navigation
  const navigate = useNavigate();

  // contexts
  const { login } = useAuth();

  // form validation schema
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required!"),
    password: yup.string().required("Password is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const { response } = await loginAPI(data);

    if (!response.token) {
      setError(response);
      return;
    }

    setError(null);

    // setting token & username in auth context
    login(response.token, response.username);

    // navigating to home page
    navigate("/");

    // fill register form fields
    reset();
  };

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          mt: 5,
          mb: 2,
        }}
      >
        <Typography variant="h5">Login</Typography>

        <form
          style={{
            width: "40%",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
              border: 1,
              borderColor: "#f0f0f0",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>
              <TextField
                type="email"
                label="Email"
                fullWidth
                {...register("email")}
              />
              {errors.email && (
                <Typography variant="caption" color="red">
                  {errors.email.message}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                type="password"
                label="Password"
                fullWidth
                {...register("password")}
              />
              {errors.password && (
                <Typography variant="caption" color="red">
                  {errors.password.message}
                </Typography>
              )}
            </Box>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
        {error && (
          <Typography variant="caption" color="red">
            {error}
          </Typography>
        )}
      </Box>
      <Typography variant="body2">
        Don't have account, Try to
        <Link to="/register" style={{ color: "blue" }}>
          {" "}
          Sign Up
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
