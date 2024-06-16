import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const LoginPage = () => {
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          mt: 5,
        }}
      >
        <Typography variant="h5">Login</Typography>
        <form
          style={{
            width: "30%",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: 2,
              border: 1,
              borderColor: "#f0f0f0",
              borderRadius: 2,
              p: 2,
              // width: "30%",
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
      </Box>
    </Container>
  );
};

export default LoginPage;
