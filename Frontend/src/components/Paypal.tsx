import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useEffect, useState } from "react";

export const Paypal = () => {
  const [orderID, setOrderID] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createOrder = (data: any, actions: any) => {
    // return actions.order
    //   .create({
    //     purchase_units: [
    //       {
    //         reference_id: "PU1",
    //         amount: {
    //           currency_code: "USD",
    //           value: cartItems?.totalPrice.toFixed(2).toString(),
    //           breakdown: {
    //             item_total: {
    //               currency_code: "USD",
    //               value: cartItems?.totalPrice.toFixed(2).toString(),
    //             },
    //           },
    //         },
    //         items: cartItems?.cartItems.map((item) => ({
    //           name: item.name,
    //           description: item.name,
    //           unit_amount: {
    //             currency_code: "USD",
    //             value: item.unitPrice.toFixed().toString(),
    //           },
    //           quantity: item.quantity.toString(),
    //         })),
    //       },
    //     ],
    //   })
    //   .then((orderID: any) => {
    //     setOrderID(orderID);
    //     return orderID;
    //   });
    <div>h</div>;
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    // return actions.order.capture().then(function (details: any) {
    //   const { payer } = details;
    //   setSuccess(true);
    // });
    return <div> e</div>;
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
    }
  }, [success]);
  return (
    <div>
      l
      {/* <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
      /> */}
    </div>
  );
};
