import "./style.scss";

export const Slide = ({ src, onSelect }) => {
  const handleSelect = () => {
    onSelect(src);
  };
  return (
    <div className="imgSlide" onClick={handleSelect}>
      <img src={src} alt="" />
    </div>
  );
};
