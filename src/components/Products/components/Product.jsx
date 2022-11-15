import style from "./Product.module.scss";
import className from "classnames/bind";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productSlice } from "./ProductSlice";
import { cartSlice } from "../../../pages/Cart/CartSlice";
import { message } from "antd";

const cx = className.bind(style);

function Product({ item }) {
  const dispatch = useDispatch();

  const viewProduct = () => {
    dispatch(productSlice.actions.setProduct(item));
  };

  const addToCart = () => {
    message.success(`Successfully Add 1-${item.name}`, [2000]);
    dispatch(cartSlice.actions.addProduct(item));
  };

  return (
    <div className={cx("wrapper")}>
      <img src={item.img} />
      <div className={cx("icons")}>
        <div className={cx("icon")} onClick={addToCart}>
          <ShoppingCartOutlined />
        </div>
        <div className={cx("icon")} onClick={viewProduct}>
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
