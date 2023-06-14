import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPayment } from "../../app/store/slices/giftData";
export const ConfirmPaymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { giftData } = useSelector((s) => s);
  const ref = useRef(null);

  //   const handleChange = (e) => {
  //     if (/(\d)+/g.test(e.target.value)) {
  //       setValue(e.target.value.split(0, 4));
  //     } else {
  //       setValue("");
  //     }
  //   };

  const handleChange = useCallback(() => {
    const cardValue = ref.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})/);
    if (cardValue) {
      ref.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]} ${cardValue[2]}${`${
            cardValue[3] ? ` ${cardValue[3]}` : ""
          }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`;
      const numbers = ref.current.value.replace(/(\D)/g, "");
      setValue(numbers);
    }
  }, [ref]);

  useEffect(() => {
    handleChange();
    if (value.length === 4) {
      dispatch(setPayment());
      navigate("/", { replace: true });
    }
  }, [value, handleChange]);

  return (
    <div className={styles.container}>
      <div className={styles.giftPrice}>{giftData?.nominal} ₽</div>
      <div className={styles.wrapper}>
        <span>Подтверждение покупки</span>
        <div className={styles.field}>
          <input
            ref={ref}
            // value={value}
            onChange={handleChange}
            type="text"
            placeholder="Код из пуша или СМС"
          />
        </div>
      </div>
    </div>
  );
};
