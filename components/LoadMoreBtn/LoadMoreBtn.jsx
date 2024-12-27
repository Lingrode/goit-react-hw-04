import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoad }) => {
  return <button onClick={() => onLoad()}>LoadMoreBtn</button>;
};

export default LoadMoreBtn;
