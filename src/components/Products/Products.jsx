import style from "./Products.module.scss";
import className from "classnames/bind";
import { popularProducts } from "../../data";
import Product from "./components/Product";

const cx = className.bind(style);

function Products() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {popularProducts.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
