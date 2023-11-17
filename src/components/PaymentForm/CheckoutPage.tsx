import React, { useRef } from "react";
import { ForwardedPaymentForm } from "./PaymentForm";
import type { PaymentFormHandleRef } from "./PaymentForm";

export function CheckoutPage() {
  const paymentFormRef = useRef<PaymentFormHandleRef>(null);

  const handlePaymentSubmit = async () => {
    if (!paymentFormRef.current) {
      return;
    }

    const data = await paymentFormRef.current.submit();
    console.log(data);
  };

  return (
    <div>
      <ForwardedPaymentForm ref={paymentFormRef} />
      <button onClick={handlePaymentSubmit}>Submit Payment</button>
    </div>
  );
}
