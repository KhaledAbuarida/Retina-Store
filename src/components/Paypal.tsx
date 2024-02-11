import { PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

export const Paypal = () => {
  const [orderID, setOrderID] = useState(false);
  const [success, setSuccess] = useState(false);

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "toy",
            amount: {
              currency_code: "USD",
              value: "60.00",
            },
          },
        ],
      })
      .then((orderID: boolean) => {
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

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);
  return (
    <div>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </div>
  );
};
