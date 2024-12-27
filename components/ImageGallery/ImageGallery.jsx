import style from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {photos.map(({ id, urls: { small, regular }, alt_description }) => {
        return (
          <li key={id}>
            <ImageCard
              imageLink={small}
              imageLinkModal={regular}
              descr={alt_description}
              onImageClick={onImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array,
  onImageClick: PropTypes.func,
};

export default ImageGallery;
