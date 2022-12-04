import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import style from "./ProductList.module.scss";
import className from "classnames/bind";
import { products } from "../../data";
import Product from "../../components/Products/components/Product";
import { useState } from "react";

const cx = className.bind(style);

function ProductList() {
  const [moreProduct, setMoreProduct] = useState(false);

  return (
    <>
      <Announcement />
      <Navbar />
      <div className="containerG">
        <div className={cx("wrap")}>
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
                <option value="Newest">Newest</option>
                <option value="Price">Price</option>
              </select>
            </div>
          </div>
          <Products />
          {moreProduct && (
            <div className={cx("container")}>
              {products.map((item, i) => (
                <Product key={i} item={item} />
              ))}
            </div>
          )}
          <div className={cx("loadMore")}>
            <button
              onClick={() => {
                setMoreProduct(!moreProduct);
              }}
            >
              {moreProduct ? "Hide Product" : "Load Product"}
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProductList;
