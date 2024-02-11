import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export const Checkout = () => {
  const [value, setValue] = useState("COD");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const initialOptions = {
    clientId:
      "ARdxO4AT2AJLFeIwWA7EWYQVBMDMlIY2vDTuxRdjOCDIWYS4M9dQWxTeCzviC1rPnBYYZ94b9zK_5V9c",
    currency: "USD",
    intent: "capture",
  };

  const [orderID, setOrderID] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  const style = { layout: "vertical" };

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "toy",
            amount: {
              currency_code: "USD",
              value: "30.00",
            },
          },
        ],
      })
      .then((orderID: any) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data: any, actions: any) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PayPalScriptProvider options={initialOptions}>
            <Container sx={{ paddingTop: "20%" }}>
              <Typography variant="h5" gutterBottom>
                Payment Method
              </Typography>
              <FormControl sx={{ marginTop: "10%", display: "block" }}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Method
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Paypal"
                    control={<Radio />}
                    label="Paypal"
                  />
                  <FormControlLabel
                    value="COD"
                    control={<Radio />}
                    label="Cash on delivery"
                  />
                </RadioGroup>
              </FormControl>
              {show ? (
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              ) : null}
              {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
              <Button
                variant="contained"
                sx={{ marginTop: "20%", width: "100%", textTransform: "none" }}
                // onClick={handleCheckout}
                onClick={() => setShow(true)}
              >
                Checkout
              </Button>
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
