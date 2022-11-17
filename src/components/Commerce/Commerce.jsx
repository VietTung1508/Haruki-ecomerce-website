import className from "classnames/bind";
import style from "./Commerce.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(style);

function Commerce() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <h1>Haruki</h1>
        <p>Simple Style to match your Smile.</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
      <video autoPlay loop className={cx("vid")}>
        <source src="./assets/video/commerce.mp4" />
      </video>
    </div>
  );
}

export default Commerce;
