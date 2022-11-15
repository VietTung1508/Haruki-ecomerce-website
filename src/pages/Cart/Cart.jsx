import styled from "./Cart.module.scss";
import className from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const cx = className.bind(styled);

function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const isEmpty = cart.length === 0 ? true : false;

  return (
    <div className={cx("wrapper")}>
      <Announcement />
      <Navbar />
      <div className={cx("content")}>
        <h1>YOUR BAG</h1>
        <div className={cx("actions")}>
          <button className={cx("shop")}>CONTINUE SHOPPING</button>
          <div>
            <span>Shopping Bag({cart.length})</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className={cx("checkout")}>CHECKOUT NOW</button>
        </div>

        {isEmpty && (
          <div className={cx("emptyCart")}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png" />
            <h2>Oops! Your cart is empty!</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <Link to="/products">
              <button>SHOP NOW</button>
            </Link>
          </div>
        )}
        {!isEmpty && (
          <div className={cx(cart.length === 0 ? "empty" : "bag")}>
            <div className={cx("info")}>
              <div className={cx("products")}>
                <div className={cx("product")}>
                  <div className={cx("productDetail")}>
                    <img src="https://cdn.shopify.com/s/files/1/0473/6965/0340/products/b844fcdf0a4849c75c9270ec4e69bfaa4689f622_I026467.0ME.FH.03_Carhartt_WIP_Detroit_Jacket_Dusty_Hamilton_Brown_om_1_768x768.jpg?v=1660653269" />
                    <div className={cx("detail")}>
                      <span>
                        <b>Product:</b> Carthartt Detroit Jacket
                      </span>
                      <span>
                        <b>ID:</b>02344425129
                      </span>
                      <div className={cx("colorContainer")}>
                        <b>Color:</b>{" "}
                        <div
                          className={cx("color")}
                          style={{ backgroundColor: "tan" }}
                        ></div>
                      </div>
                      <span>
                        <b>Size:</b> Large
                      </span>
                    </div>
                  </div>
                  <div className={cx("priceDetail")}>
                    <div className={cx("AmountContainer")}>
                      <button>
                        <Remove />
                      </button>
                      <span>1</span>
                      <button>
                        <Add />
                      </button>
                    </div>
                    <div className={cx("priceContainer")}>
                      <span>20.000 ¥</span>
                    </div>
                  </div>
                </div>
                <div className={cx("product")}>
                  <div className={cx("productDetail")}>
                    <img src="https://cdn.shopify.com/s/files/1/0473/6965/0340/products/8c9629c8df6eb1a54500e06f5bf4c5cb8aaf0fb8_I026467.0UG.FH.03_Carhartt_WIP_Detroit_Jacket_Pale_Spearmint_Pale_Spearmint_om_1_768x768.jpg?v=1660247805" />
                    <div className={cx("detail")}>
                      <span>
                        <b>Product:</b> Carthartt Detroit Jacket
                      </span>
                      <span>
                        <b>ID:</b>0234425322129
                      </span>
                      <div className={cx("colorContainer")}>
                        <b>Color:</b>{" "}
                        <div
                          className={cx("color")}
                          style={{ backgroundColor: "green" }}
                        ></div>
                      </div>
                      <span>
                        <b>Size:</b> Medium
                      </span>
                    </div>
                  </div>
                  <div className={cx("priceDetail")}>
                    <div className={cx("AmountContainer")}>
                      <button>
                        <Remove />
                      </button>
                      <span>1</span>
                      <button>
                        <Add />
                      </button>
                    </div>
                    <div className={cx("priceContainer")}>
                      <span>20.000 ¥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("summary")}>
              <h1>ORDER SUMMARY</h1>
              <div className={cx("order")}>
                <p>Subtotal:</p>
                <span>40.000 ¥</span>
              </div>
              <div className={cx("order")}>
                <p>Estimate Shipping:</p>
                <span>1000 ¥</span>
              </div>
              <div className={cx("order")}>
                <p>Discount:</p>
                <span>-5000 ¥</span>
              </div>
              <div className={cx("order")}>
                <p
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Total:
                </p>
                <span>36.000 ¥</span>
              </div>
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
