import { ColorPicker } from "../ColorPicker";

import styles from "./GiftSettings.module.scss";
import { MenuItem, Select } from "@mui/material";

export const GiftSettings = ({
  font,
  onChange,
  textColor,
  handleChangeColor,
}) => {
//   const checkBox = useRef(null);

//   const handleShowBorder = (e) => {
//     setIsShowBorder(e.target.checked);
//   };

//   const handleClickLabel = () => {
//     setIsShowBorder((s) => !s);
//   };

//   const handleShowUnderline = (e) => {
//     setIsShowUnderline(e.target.checked);
//   };

//   const handleClickLabelUnderline = () => {
//     setIsShowUnderline((s) => !s);
//   };

  return (
    <div className={styles.wrapper}>
      {/* <div className="relative flex items-center mt-[16px]">
        <div
          className={clsx(styles.checkBoxView, {
            [styles.checked]: isShowBorder,
          })}
        >
          {isShowBorder && <span>&#10003;</span>}
          <input
            ref={checkBox}
            checked={isShowBorder}
            onChange={handleShowBorder}
            type="checkbox"
            id="showBorder"
            name="showBorder"
            className={styles.checkBox}
            //   className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <label
          htmlFor="showBorder"
          className="ml-[8px] cursor-pointer"
          onClick={handleClickLabel}
        >
          Показывать рамку
        </label>
      </div>

      <div className="relative flex items-center mt-[16px]">
        <div
          className={clsx(styles.checkBoxView, {
            [styles.checked]: isShowUnderline,
          })}
        >
          {isShowUnderline && <span>&#10003;</span>}
          <input
            checked={isShowUnderline}
            onChange={handleShowUnderline}
            type="checkbox"
            id="showUnderline"
            name="showUnderline"
            className={styles.checkBox}
            // className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <label
          htmlFor="showUnderline"
          className="ml-[8px] cursor-pointer"
          onClick={handleClickLabelUnderline}
        >
          Показывать подчеркивание
        </label>
      </div> */}

      <div className={styles.colorPickerWrapper}>
        <div
          style={{ backgroundColor: textColor }}
          className={styles.colorPicker}
        >
          <ColorPicker onChangeColor={handleChangeColor} />
        </div>
        <span>Выбирите цвет текста</span>
      </div>

      <div className={styles.fontSelect}>
        <span>Выберите шрифт</span>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={font}
          onChange={onChange}
        >
          <MenuItem value="Nunito Sans">Nunito Sans</MenuItem>
          <MenuItem value="Montserrat">Montserrat</MenuItem>
          <MenuItem value="Roboto">Roboto</MenuItem>
          <MenuItem value="Open Sans">Open Sans</MenuItem>
          <MenuItem value="Inter">Inter</MenuItem>
        </Select>
      </div>
    </div>
  );
};
