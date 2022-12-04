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

const cx = className.bind(style);

function Product({ item }) {
  const dispatch = useDispatch();

  const viewProduct = () => {
    dispatch(productSlice.actions.setProduct(item));
  };

  const addToCart = () => {
    dispatch(cartSlice.actions.addProduct(item));
  };

  return (
    <div className={cx("wrapper")}>
      <img src={item.img} alt="" />
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
      <div className={cx("detail")}>
        <h2>{item.name}</h2>
        <h2>{item.price} ¥</h2>
      </div>
    </div>
  );
}

export default Product;
