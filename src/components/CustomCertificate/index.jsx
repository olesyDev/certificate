import { forwardRef } from "react";
import "./styles.scss";

export const CustomCertificate = forwardRef(
  ({ name, img, color, isShowBorder, isShowUnderline }, ref) => {
    return (
      <div
        ref={ref}
        style={{ fontFamily: "OpenSans", color }}
        className="certContainer"
      >
        <div className="certificateWrapper">
          {img && <img className="certImgBg" src={img} alt="" />}
          <div
            className="certContent"
            style={{
              border: isShowBorder ? " 1px solid #000" : "none",
            }}
          >
            <div className="certHeader">
            <h1 style={{ fontFamily: "OpenSans,Open Sans" }}>Сертификат</h1>
            </div>
            <div
              style={{
                fontFamily: "OpenSans, Open Sans",
                borderBottom: isShowUnderline ? "1px solid #777" : "none",
              }}
              className="recipientsName"
            >
              {name}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
