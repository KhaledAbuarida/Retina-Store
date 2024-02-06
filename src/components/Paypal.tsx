import { useEffect, useRef } from "react";

interface WindowWithPaypal extends Window {
  paypal?: any;
}

export const Paypal: React.FC = () => {
  const paypal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CREATE ORDER WITH PAYPAL
    const createOrder = (data: any, actions: any): any => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "10.00",
            },
          },
        ],
      });
    };

    // ON APPROVE
    const onApprove = async (data: any, actions: any) => {
      return await actions.order.capture().then((details: any) => {
        fetch("/api/paypal-order-capture", {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
    };
    const onError = (err: any) => {
      console.log(err);
    };

    // Type assertion to inform TypeScript about the existence of the 'paypal' property
    const windowWithPaypal = window as WindowWithPaypal;

    if (windowWithPaypal.paypal && paypal.current) {
      windowWithPaypal.paypal
        .Buttons({
          createOrder,
          onApprove,
          onError,
        })
        .render(paypal.current);
    }
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};
