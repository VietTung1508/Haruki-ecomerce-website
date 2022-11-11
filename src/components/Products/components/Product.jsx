import style from "./Product.module.scss";
import className from "classnames/bind";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const cx = className.bind(style);

function Product({ item }) {
  return (
    <div className={cx("wrapper")}>
      <img src={item.img} />
      <div className={cx("icons")}>
        <div className={cx("icon")}>
          <ShoppingCartOutlined />
        </div>
        <div className={cx("icon")}>
          <Link to="/product">
            <SearchOutlined />
          </Link>
        </div>
        <div className={cx("icon")}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
