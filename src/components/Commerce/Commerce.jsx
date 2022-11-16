import className from "classnames/bind";
import style from "./Commerce.module.scss";

const cx = className.bind(style);

function Commerce() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <h1>Haruki</h1>
      </div>
      <video autoPlay loop className={cx("vid")}>
        <source src="./assets/video/commerce.mp4" />
      </video>
    </div>
  );
}

export default Commerce;
