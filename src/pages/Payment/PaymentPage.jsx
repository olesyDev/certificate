import { useState } from "react";
import { PaymentForm } from "../../components/PaymentForm";
import styles from "./PaymentPage.module.scss";
import { ConfirmPaymentForm } from "../../components/ConfirmPaymentForm";
export const PaymentPage = () => {
  const [isSent, setIsSent] = useState(false);
  // const [isPayment, setPayment] = useState(false);

  const handleSent = () => {
    setIsSent(true);
  };

  // const handlePayment = () => {
  //   setPayment(true);
  // };
  return (
    <div className={styles.paymentWrapper}>
      {!isSent && <PaymentForm onSent={handleSent} />}
      {isSent && <ConfirmPaymentForm />}
    </div>
  );
};
