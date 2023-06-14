import { forwardRef, useMemo } from "react";
import "./GitftPattern.scss";
import { fonts } from "../../utils/fonts";
import { useSelector } from "react-redux";
import { numberFormatter } from "../../utils/helper";

export const GiftPattern = forwardRef(
  (
    { name, text, from, font, img, pattern, editedImg, color, nominal },
    ref
  ) => {
    const { giftData } = useSelector((s) => s);
    const srs = useMemo(() => {
      if (giftData.img) {
        return JSON.parse(giftData.img);
      }
      if (editedImg) {
        return editedImg;
      }
      if (img) {
        return img;
      }
      if (!editedImg && !img) {
        return pattern;
      }
    }, [editedImg, img, pattern, giftData.img]);

    const selectFont = useMemo(() => {
      if (giftData.font) {
        return fonts[giftData.font].fontFamily;
      } else {
        return fonts[font].fontFamily;
      }
    }, [font, giftData?.font]);

    const nameSelect = useMemo(() => {
      if (giftData.name) {
        return giftData.name;
      } else {
        return name;
      }
    }, [name, giftData?.name]);

    const textSelect = useMemo(() => {
      if (giftData.text) {
        return giftData.text;
      } else {
        return text;
      }
    }, [text, giftData?.text]);

    const fromSelect = useMemo(() => {
      if (giftData.from) {
        return giftData.from;
      } else {
        return from;
      }
    }, [from, giftData?.from]);

    const colorSelect = useMemo(() => {
      if (giftData.color) {
        return giftData.color;
      } else {
        return color;
      }
    }, [color, giftData?.color]);

    const nominalSelect = useMemo(() => {
      if (giftData.nominal) {
        return giftData.nominal;
      } else {
        return nominal;
      }
    }, [nominal, giftData?.nominal]);

    return (
      <div
        // style={{ color, fontFamily: `${fonts[font].fontFamily}` }}
        // style={{ fontFamily: "Open Sans" }}
        ref={ref}
        className="giftContainer"
      >
        <div className="giftWrapper">
          <div className="giftBlockImg">
            <img src={srs} alt="" />
            <span
              style={{ color: colorSelect, fontFamily: `"${selectFont}"` }}
              className="giftTitle"
            >
              Gift Card
            </span>
            <span
              style={{ color: colorSelect, fontFamily: `"${selectFont}"` }}
              className="giftNominal"
            >
              {numberFormatter(nominalSelect)} P
            </span>
          </div>
          <div className="gitText">
            <div className="textWrapper">
              <h1 style={{ color: colorSelect, fontFamily: `"${selectFont}"` }}>
                {nameSelect || "Ивану Иванову"}
              </h1>
              <p style={{ color: colorSelect, fontFamily: `"${selectFont}"` }}>
                {textSelect ||
                  `Поздравляю тебя с этим особенным днем! Хочу пожелать тебе самых ярких и незабываемых моментов в жизни, которые заполнят твое сердце радостью и счастьем.
Ты заслуживаешь только самого лучшего.`}
              </p>
              <h2 style={{ color: colorSelect, fontFamily: `"${selectFont}"` }}>
                от {fromSelect || "друга"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
