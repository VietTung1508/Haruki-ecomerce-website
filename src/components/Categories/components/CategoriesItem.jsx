import className from "classnames/bind";
import style from "./CategoriesItem.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(style);

function CategoriesItem({ item }) {
  return (
    <div className={cx("wrapper")}>
      <img src={item.img} alt="" />
      <div className={cx("info")}>
        <h1>{item.title}</h1>
        <Link to="/products">
          <button>LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesItem;
