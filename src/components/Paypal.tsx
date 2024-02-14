import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart.context";

export const Paypal = () => {
  const [orderID, setOrderID] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const cartItems = useContext(CartContext);

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            reference_id: "PU1",
            amount: {
              currency_code: "USD",
              value: cartItems?.totalPrice.toFixed(2).toString(),
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: cartItems?.totalPrice.toFixed(2).toString(),
                },
              },
            },
            items: cartItems?.cartItems.map((item) => ({
              name: item.name,
              description: item.name,
              unit_amount: {
                currency_code: "USD",
                value: item.price.toFixed().toString(),
              },
              quantity: item.quantity.toString(),
            })),
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
