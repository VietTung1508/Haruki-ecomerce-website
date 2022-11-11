import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import style from "./ProductList.module.scss";
import className from "classnames/bind";

const cx = className.bind(style);

function ProductList() {
  return (
    <div className={cx("wrap")}>
      <Announcement />
      <Navbar />
      <h1 className={cx("title")}>Jacket</h1>
      <div className={cx("filterWrapper")}>
        <div className={cx("left")}>
          <h3>Filter Products:</h3>
          <select>
            <option>Black</option>
            <option>Tan</option>
            <option>Navy</option>
          </select>
          <select>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </select>
        </div>
        <div className={cx("right")}>
          <h3>Sort Products:</h3>
          <select>
            <option>Newest</option>
            <option>Price</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductList;
