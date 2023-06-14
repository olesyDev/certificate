import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Button, TextField } from "@mui/material";
import styles from "./style.module.scss";

export const PaymentForm = ({ onSent }) => {
  const { giftData } = useSelector((s) => s);
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [error, setError] = useState(false);

  const cardNumberRef = useRef(null);
  const cardDateRef = useRef(null);
  const cardCvvRef = useRef(null);

  const handleChangeCardNumber = useCallback(() => {
    if (cardNumberRef.current) {
      const cardValue = cardNumberRef.current.value
        .replace(/\D/g, "")
        .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
      if (cardValue) {
        cardNumberRef.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]} ${cardValue[2]}${`${
              cardValue[3] ? ` ${cardValue[3]}` : ""
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`;
        const numbers = cardNumberRef.current.value.replace(/(\D)/g, "");
        setCardNumber(numbers);
      }
    }
  }, [cardNumberRef]);

  const handleChangeCardData = useCallback(() => {
    if (cardDateRef.current) {
      const cardValue = cardDateRef.current.value
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,2})/);
      if (cardValue) {
        cardDateRef.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]} / ${cardValue[2]}`;
        const numbers = cardDateRef.current.value.replace(/(\D)/g, "");
        setDate(numbers);
      }
    }
  }, [cardDateRef]);

  useEffect(() => {
    handleChangeCardNumber();
  }, [cardNumber, handleChangeCardNumber]);
  useEffect(() => {
    handleChangeCardData();
  }, [cardDate, handleChangeCardData]);

  const handleChangeCvv = (e) => {
    if (/(\d)+/g.test(e.target.value)) {
      setCardCvv(e.target.value.split(0, 4));
    } else {
      setCardCvv("");
    }
  };

  const handleSubmit = () => {
    if (!cardNumber || !cardDate || !cardCvv) {
      setError(true);
    }
    if (cardNumber && cardDate && cardCvv) {
      onSent();
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.paymentInfo}>
        <h2>Итого к оплате:</h2>
        <h3>{giftData?.nominal} ₽</h3>
      </div>
      <form className={styles.form}>
        <div className={styles.rowInfo}>
          <div className={styles.formField}>
            <TextField
              id="filled-number"
              label="Номер карты"
              type="text"
              error={error && !cardNumber}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              inputRef={cardNumberRef}
              className={styles.cartNumber}
              onChange={handleChangeCardNumber}
            />
          </div>

          <div className={clsx(styles.formField, styles.fixedWidth)}>
            <TextField
              id="filled-number"
              label="ММ / ГГ"
              type="text"
              error={error && !cardDate}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              inputRef={cardDateRef}
              onChange={handleChangeCardData}
            />
          </div>
        </div>
        <div className={styles.rowPrivateInfo}>
          <span className={styles.labeInfo}>
            Последние цифры
            <br /> &nbsp;на обороте карты
          </span>
          <div className={clsx(styles.formField, styles.fixedWidth)}>
            <TextField
              id="filled-number"
              label="CVV"
              type="text"
              value={cardCvv}
              error={error && !cardCvv}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              inputRef={cardCvvRef}
              onChange={handleChangeCvv}
              inputProps={{ maxLength: 3 }}
            />
          </div>
        </div>
      </form>
      <div className={styles.paymentBtn}>
        <Button onClick={handleSubmit} variant="contained">
          Введите данные банковской карты
        </Button>
      </div>
    </div>
  );
};
