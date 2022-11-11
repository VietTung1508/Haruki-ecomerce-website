import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Product.module.scss";
import className from "classnames/bind";
import Newsletter from "../../components/Newsletter/Newsletter";
import Announcement from "../../components/Announcement/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const cx = className.bind(style);

function Product() {
  const [quanlity, setQuanlity] = useState(1);

  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <Announcement />
      <div className={cx("productContainer")}>
        <div className={cx("imgContainer")}>
          <img src="https://cdn.shopify.com/s/files/1/0473/6965/0340/products/8c9629c8df6eb1a54500e06f5bf4c5cb8aaf0fb8_I026467.0UG.FH.03_Carhartt_WIP_Detroit_Jacket_Pale_Spearmint_Pale_Spearmint_om_1_768x768.jpg?v=1660247805" />
        </div>
        <div className={cx("infoContainer")}>
          <h1>Carhartt Detroit Jacket</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            dignissimos possimus quam quis molestiae eveniet nam amet vitae
            cumque explicabo id debitis quibusdam officiis itaque rerum deleniti
            iste, excepturi illo! Dolore omnis, eaque nobis cumque assumenda eos
            provident unde minus, eligendi delectus id repellat, ratione
            adipisci reprehenderit voluptates voluptate saepe doloremque
            suscipit ipsam velit optio? Quisquam illum aspernatur iure placeat!
          </p>
          <span className={cx("price")}>20.000 Ұ</span>
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
