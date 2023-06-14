import { useRef } from "react";
import Slider from "@mui/material/Slider";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { PatternFormat } from "react-number-format";
const allowedFormats = {
  "image/jpeg": true,
  "image/png": true,
  "image/jpg": true,
};
export const MainForm = ({
  name,
  phoneNumber,
  text,
  from,
  nominal,
  onChangeName,
  onChangePhone,
  onChangeText,
  onChangeFrom,
  onChangeNominal,
  onUpload,
  handleOpenEditor,
  selectImg,
}) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (allowedFormats[file.type]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        onUpload(e.target.result);
      };
      fileReader.readAsDataURL(file);
    }
    e.target.value = null;
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className="container mx-auto">
          <div className="md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className={clsx("p-2 w-full", styles.formField)}>
                <div className="relative">
                  <label htmlFor="name">Введите имя получателя</label>
                  <input
                    value={name}
                    onChange={onChangeName}
                    type="text"
                    maxLength={100}
                    id="name"
                    name="name"
                    placeholder="Ввести"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className={clsx("p-2 w-full", styles.formField)}>
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-semibold text-gray-600"
                  >
                    Введите номер
                  </label>
                  <PatternFormat
                    value={phoneNumber}
                    onChange={onChangePhone}
                    mask="_"
                    type="phone"
                    format="+7 (###) ### ## ##"
                    placeholder="Ввести"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {/* <input
                    value={phoneNumber}
                    onChange={onChangePhone}
                    maxLength={13}
                    placeholder="Ввести"
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  /> */}
                </div>
              </div>

              <div className={clsx("p-2 w-full", styles.formField)}>
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-semibold text-gray-600"
                  >
                    Введите текст поздравления
                  </label>
                  <textarea
                    value={text}
                    onChange={onChangeText}
                    placeholder="Ввести"
                    type="text"
                    id="text"
                    name="text"
                    maxLength={300}
                    className="min-h-[65px] max-h-[110px] resize-y w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className={clsx("p-2 w-full", styles.formField)}>
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-semibold text-gray-600"
                  >
                    От кого
                  </label>
                  <input
                    value={from}
                    onChange={onChangeFrom}
                    maxLength={100}
                    placeholder="Ввести"
                    type="text"
                    id="from"
                    name="from"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className={clsx("p-2 w-full", styles.formField)}>
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-semibold text-gray-600"
                  >
                    Выберите номинал сертификата
                  </label>
                  <Slider
                    defaultValue={1000}
                    value={nominal}
                    onChange={onChangeNominal}
                    aria-label="Default"
                    min={500}
                    max={10000}
                    step={100}
                    valueLabelDisplay="auto"
                    color="secondary"
                    valueLabelFormat={(value) => `${value} ₽`}
                    className={styles.nominal}
                  />
                </div>
              </div>

              {/* <div className="p-2 w-full">
              <div className="relative">
                <input
                  ref={checkBox}
                  checked={isShowBorder}
                  onChange={handleShowBorder}
                  type="checkbox"
                  id="showBorder"
                  name="showBorder"
                  className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="showBorder"
                  className="leading-7 text-sm text-gray-600 ml-[8px] cursor-pointer"
                  onClick={handleClickLabel}
                >
                  Показывать рамку
                </label>
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <input
                  checked={isShowUnderline}
                  onChange={handleShowUnderline}
                  type="checkbox"
                  id="showUnderline"
                  name="showUnderline"
                  className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="showUnderline"
                  className="leading-7 text-sm text-gray-600 ml-[8px] cursor-pointer"
                  onClick={handleClickLabelUnderline}
                >
                  Показывать подчеркивание
                </label>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px] p-2 w-full flex justify-center gap-6">
        <button
          onClick={handleClick}
          className={clsx(
            "w-[296px] text-white cursor-pointer    font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none ",
            styles.formBtn
          )}
        >
          Загрузить фотографию
        </button>
        <button
          onClick={handleOpenEditor}
          disabled={!selectImg}
          className={clsx(
            "w-[296px] text-white cursor-pointer    font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none ",
            styles.formBtn
          )}
        >
          Открыть редактор
        </button>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleChange}
          type="file"
          accept="image/png, image/jpeg, image/jpg,image/jpeg,image/heic"
        />
      </div>
    </div>
  );
};
