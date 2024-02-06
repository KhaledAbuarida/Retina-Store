import { useEffect, useRef } from "react";

interface WindowWithPaypal extends Window {
  paypal?: any;
}

export const Paypal: React.FC = () => {
  const paypal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CREATE ORDER WITH PAYPAL
    const createOrder = (data: any, actions: any, error: any): any => {
      return actions.order.create({
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
    const onApprove = (data: any, actions: any): any => {
      return actions.order.capture().then(function (details: any) {
        // Handle the captured payment
        console.log(details);
      });
    };

    // Type assertion to inform TypeScript about the existence of the 'paypal' property
    const windowWithPaypal = window as WindowWithPaypal;

    if (windowWithPaypal.paypal && paypal.current) {
      windowWithPaypal.paypal
        .Buttons({
          createOrder,
          onApprove,
        })
        .render(paypal.current);
    }

    // Cleanup function
    return () => {
      // Perform any cleanup here if needed
    };
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};
