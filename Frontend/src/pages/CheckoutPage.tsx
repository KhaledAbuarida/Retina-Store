import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useForm } from "react-hook-form";
import { Paypal } from "../components/Paypal";

export const Checkout = () => {
  // states
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setShow(data.radioGroup === "Paypal");
  };

  const initialOptions = {
    clientId:
      "AZj5zoXTTclUtjJTy7j66coRlH5PcSa0K54ufQ5OzchXP3-y0pSGeNwvNcBnids3JcsnufgTK0tCL8H3",
    currency: "USD",
    intent: "capture",
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PayPalScriptProvider options={initialOptions}>
            <Container sx={{ paddingTop: "20%" }}>
              <Typography variant="h5" gutterBottom>
                Payment Method
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>Method</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Paypal"
                    control={<Radio {...register("radioGroup")} />}
                    label="Paypal"
                  />
                  <FormControlLabel
                    value="COD"
                    control={<Radio {...register("radioGroup")} />}
                    label="Cash on delivery"
                  />
                </RadioGroup>
                {show && <Paypal />}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    marginTop: "20px",
                    width: "100%",
                    textTransform: "none",
                  }}
                >
                  Checkout
                </Button>
              </form>
            </Container>
          </PayPalScriptProvider>
        </Grid>
        <Grid item xs={6}>
          <Container sx={{ padding: "20% 0" }}>
            <Typography variant="h5" gutterBottom>
              Shipping Address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
