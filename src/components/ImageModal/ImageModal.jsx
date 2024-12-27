import ReactModal from "react-modal";
import PropTypes from "prop-types";
import style from "./ImageModal.module.css";

ReactModal.setAppElement(document.getElementById("root"));

const ImageModal = ({ imageLink, isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <button onClick={() => onClose()}>Close</button>
      <img src={imageLink} alt="" />
    </ReactModal>
  );
};

ImageModal.propTypes = {
  imageLink: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ImageModal;
