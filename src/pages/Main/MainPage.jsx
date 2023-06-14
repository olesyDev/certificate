import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import jsPDF from "jspdf";
import { MainForm } from "../../components/MainForm";
import { ImageEditor } from "../../components/ImageEditor";
import { GiftPattern } from "../../components/GiftPattern";
import { GiftSettings } from "../../components/GiftSettings";
import { slides } from "../../utils/slides";
import { fonts } from "../../utils/fonts";
import { Slider } from "../../components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { reset, setGift } from "../../app/store/slices/giftData";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { giftData } = useSelector((s) => s);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [from, setFrom] = useState("");
  const [nominal, setNominal] = useState(500);
  const [font, setFont] = useState("Nunito Sans");
  const [img, setImg] = useState("");
  const [selectPattern, setSelectPattern] = useState(slides[4]);

  const [editedImage, setEditedImage] = useState("");

  const [textColor, setTextColor] = useState("#fff");
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  const ref = useRef(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleGenerate = useCallback(() => {
    new Promise(() => {
      const certificate = new jsPDF({
        orientation: "landscape",
        format: "a4",
        unit: "pt",
      });
      const { fontFamily, fontToFile, fontToPdf } = giftData?.font
        ? fonts[giftData?.font]
        : fonts[font];
      certificate.addFileToVFS(fontToFile, fontToPdf);
      certificate.addFont(fontToFile, fontFamily, "normal");
      certificate.setFont(fontFamily);
      certificate
        .html(ref.current, {
          async callback(doc) {
            await doc.save("gift");
          },

          width: 900,
          margin: [14, 0, 0, 175],
          windowWidth: 900,
          x: 0,
          y: 0,
          html2canvas: {
            scale: 0.6,
            windowHeight: 400,
            windowWidth: 500,
            width: 900,
          },
        })
        .finally(() => {
          dispatch(reset());
        });
    });
  }, [font, giftData?.font]);

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleChangeFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleChangeNominal = (e, value) => {
    setNominal(value);
  };
  const handleUpload = (photo) => {
    setImg(photo);
  };

  const handleSave = (editImg) => {
    setEditedImage(editImg.imageBase64);
  };

  const handleChangeFont = (e) => {
    setFont(e.target.value);
  };

  const handleChangeColor = (color) => {
    setTextColor(color);
  };

  const handleSelectPattern = (item) => {
    setSelectPattern(item);
  };

  useEffect(() => {
    if (giftData.isPayment) {
      handleGenerate();
    }
  }, [giftData.isPayment, handleGenerate]);
  const handlePayment = () => {
    let bgImg = selectPattern;
    if (img) {
      bgImg = img;
    }
    if (editedImage) {
      bgImg = editedImage;
    }
    const gift = {
      nominal,
      img: JSON.stringify(bgImg),
      name,
      text,
      from,
      font,
      color: textColor,
    };
    dispatch(setGift(gift));
    navigate("payment");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <div
            className={clsx(
              "max-w-screen-xl px-4 pt-20 pb-8 mx-auto",
              styles.hero
            )}
          >
            <div className="mr-auto place-self-center lg:col-span-7">
              <h2 className={styles.heroMainText}>
                Сделайте <br /> подарок особенным:
              </h2>
              <h3>
                Индивидуальные сертификаты <br /> для каждого случая!
              </h3>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
            </div>
            <div
              className={clsx(
                "hidden lg:mt-0 lg:col-span-5 lg:flex",
                styles.heroRight
              )}
            >
              <div className={styles.heroGift}>
                <span className={styles.giftTitle}>Gift Card</span>
                <span className={styles.giftFor}>For you</span>
              </div>
              <button className={styles.createCertBtn}>
                <a className="text-decoration-none" href="#createCertificate">
                  <span>Создать сертификат</span>
                </a>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.sliderSection}>
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div className="items-center gap-8 ">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className={styles.sectionTitle}>
                  Выберите понравившийся сертификат или создайте свой
                </h2>
                <Slider onSelect={handleSelectPattern} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.createCertForm} id="createCertificate">
          <div className="max-w-screen-sm mx-auto text-center mt-[16px]">
            <h2 className={styles.sectionTitle}>Создать</h2>
          </div>
          <div className="App">
            <MainForm
              name={name}
              phoneNumber={phoneNumber}
              text={text}
              from={from}
              nominal={nominal}
              onChangeName={handleChangeName}
              onChangePhone={handleChangePhoneNumber}
              onChangeText={handleChangeText}
              onChangeFrom={handleChangeFrom}
              onChangeNominal={handleChangeNominal}
              onUpload={handleUpload}
              handleOpenEditor={openImgEditor}
              selectImg={img}
            />

            <ImageEditor
              img={img}
              onSelect={handleSave}
              closeImgEditor={closeImgEditor}
              isImgEditorShown={isImgEditorShown}
            />

            <GiftSettings
              font={font}
              onChange={handleChangeFont}
              handleChangeColor={handleChangeColor}
              textColor={textColor}
            />
            <div className="my-4">
              <GiftPattern
                ref={ref}
                name={name}
                img={img}
                pattern={selectPattern}
                editedImg={editedImage}
                nominal={nominal}
                text={text}
                from={from}
                color={textColor}
                font={font}
              />
            </div>
            <div className="p-2 w-full flex justify-center">
              <button onClick={handlePayment} className={styles.paymentBtn}>
                Оплатить
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
