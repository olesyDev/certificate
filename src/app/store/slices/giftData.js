import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nominal: null,
  img: null,
  name: null,
  text: null,
  from: null,
  font: null,
  color: null,
  isPayment: false,
};

export const giftData = createSlice({
  name: "giftData",
  initialState,
  reducers: {
    setGift: (state, action) => {
      state.nominal = action.payload.nominal;
      state.img = action.payload.img;
      state.name = action.payload.name;
      state.text = action.payload.text;
      state.from = action.payload.from;
      state.font = action.payload.font;
      state.color = action.payload.color;
    },
    setPayment: (state) => {
      state.isPayment = true;
    },
    reset: () => initialState,
  },
});

export const { setGift, reset, setPayment } = giftData.actions;

export default giftData.reducer;
