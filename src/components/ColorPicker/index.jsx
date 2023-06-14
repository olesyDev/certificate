import { useState } from "react";

export const ColorPicker = ({onChangeColor}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    onChangeColor(e.target.value)
    setValue(e.target.value);
  };
  return <input type="color" value={value} onChange={handleChange} />;
};