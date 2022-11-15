import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Product.module.scss";
import className from "classnames/bind";
import Newsletter from "../../components/Newsletter/Newsletter";
import Announcement from "../../components/Announcement/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

const cx = className.bind(style);

function Product() {
  const [quanlity, setQuanlity] = useState(1);

  const product = useSelector((state) => state.setProduct.product);

  console.log(product);

  return (
    <div className={cx("wrapper")}>
      <Announcement />
      <Navbar />
      <div className={cx("productContainer")}>
        <div className={cx("imgContainer")}>
          <img src={product.img} />
        </div>
        <div className={cx("infoContainer")}>
          <h1>{product.name}</h1>
          <p>{product.des}</p>
          <span className={cx("price")}>{product.price}</span>
          <div className={cx("filterContainer")}>
            <div className={cx("filter")}>
              <span>Size:</span>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className={cx("filter")}>
              <span>Color:</span>
              <div
                className={cx("color")}
                style={{ backgroundColor: "tan" }}
              ></div>
              <div
                className={cx("color")}
                style={{ backgroundColor: "green" }}
              ></div>
              <div
                className={cx("color")}
                style={{ backgroundColor: "black" }}
              ></div>
            </div>
          </div>
          <div className={cx("actions")}>
            <div className={cx("quan")}>
              <Remove
                onClick={() => {
                  if (quanlity > 1) {
                    setQuanlity(quanlity - 1);
                  }
                }}
              />
              <span>{quanlity}</span>
              <Add onClick={() => setQuanlity(quanlity + 1)} />
            </div>
            <button className={cx("addBtn")}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
