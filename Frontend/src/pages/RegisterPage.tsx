import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { registerAPI } from "../api/userAPI";
import { useAuth } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // states
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // navigation
  const navigate = useNavigate();

  // contexts
  const { login } = useAuth();

  // form validation schema
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Username is required, try enter username"),
    firstName: yup
      .string()
      .required("First name is required, try enter first name"),
    lastName: yup
      .string()
      .required("Last name is required, try enter last name"),
    phone: yup.string(),
    country: yup.string().required("Country is required"),
    email: yup.string().email().required("Email is required, try enter email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    setEmailError(null);
    setUsernameError(null);
    const { response } = await registerAPI(data);

    if (!response.ok) {
      response.email && setEmailError("Please, try another email");
      response.username && setUsernameError("Please, try another username");
      return;
    }

    // setting token & username in auth context
    login(response.token, response.username);

    // navigating to home page
    navigate("/");

    // fill register form fields
    reset();
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          mt: 2,
          mb: 2,
        }}
      >
        <Typography variant="h5">Register New User</Typography>

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
              gap: 1,
              mt: 2,
              border: 1,
              borderColor: "#f0f0f0",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box>
              <TextField
                type="text"
                label="Username"
                fullWidth
                {...register("userName")}
              />
              {(errors.userName && (
                <Typography variant="caption" color="red">
                  {errors.userName.message}
                </Typography>
              )) ||
                (usernameError && (
                  <Typography variant="caption" color="red">
                    {usernameError}
                  </Typography>
                ))}
            </Box>
            <Box>
              <TextField
                type="text"
                label="First Name"
                fullWidth
                {...register("firstName")}
              />
              {errors.firstName && (
                <Typography variant="caption" color="red">
                  {errors.firstName.message}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                type="text"
                label="Last Name"
                fullWidth
                {...register("lastName")}
              />
              {errors.lastName && (
                <Typography variant="caption" color="red">
                  {errors.lastName.message}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                type="text"
                label="Phone Number"
                fullWidth
                {...register("phone")}
              />
              {errors.phone && (
                <Typography variant="caption" color="red">
                  {errors.phone.message}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                type="text"
                label="Country"
                fullWidth
                {...register("country")}
              />
              {errors.country && (
                <Typography variant="caption" color="red">
                  {errors.country.message}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                type="text"
                label="Email"
                fullWidth
                {...register("email")}
              />
              {(errors.email && (
                <Typography variant="caption" color="red">
                  {errors.email.message}
                </Typography>
              )) ||
                (emailError && (
                  <Typography variant="caption" color="red">
                    {emailError}
                  </Typography>
                ))}
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
            <Box>
              <TextField
                type="password"
                label="Confirm Password"
                fullWidth
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <Typography variant="caption" color="red">
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Box>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
      <Typography variant="body2">
        Have an account, Try to
        <Link to="/login" style={{ color: "blue" }}>
          {" "}
          Sign in
        </Link>
      </Typography>
    </Container>
  );
};

export default RegisterPage;
