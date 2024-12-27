import PropTypes from "prop-types";
import style from "./ImageCard.module.css";

const ImageCard = ({ imageLink, descr, onImageClick, imageLinkModal }) => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src={imageLink}
        alt={descr}
        onClick={() => onImageClick(imageLinkModal)}
      />
    </div>
  );
};

ImageCard.propTypes = {
  imageLink: PropTypes.string,
  descr: PropTypes.string,
  onImageClick: PropTypes.func,
  imageLinkModal: PropTypes.string,
};

export default ImageCard;
