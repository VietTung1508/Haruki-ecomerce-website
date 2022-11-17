import styled from "./Cart.module.scss";
import className from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { cartSlice } from "./CartSlice";

const cx = className.bind(styled);

function Cart() {
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((pre, acc) => pre + acc.price * acc.quan, 0);

  const isEmpty = cart.length === 0 ? true : false;

  const handleDelete = (i) => {
    dispatch(cartSlice.actions.deleteProduct(i));
  };

  const handleDecrease = (item) => {
    dispatch(cartSlice.actions.decreaseQuan(item));
  };

  const handleIncrese = (item) => {
    dispatch(cartSlice.actions.increaseQuan(item));
  };

  return (
    <div className={cx("wrapper")}>
      <Announcement />
      <Navbar />
      <div className={cx("content")}>
        <h1>YOUR BAG</h1>
        <div className={cx("actions")}>
          <Link to="/products">
            <button className={cx("shop")}>CONTINUE SHOPPING</button>
          </Link>
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
          <div className={cx("bag")}>
            <div className={cx("info")}>
              <div className={cx("products")}>
                {cart.map((item, i) => (
                  <div data-aos="fade-right" className={cx("product")} key={i}>
                    <div className={cx("deleteBtn")}>
                      <button onClick={() => handleDelete(i)}>
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                    <div className={cx("productDetail")}>
                      <img src={item.img} />
                      <div className={cx("detail")}>
                        <span>
                          <b>Product:</b> {item.name}
                        </span>
                        <span>
                          <b>ID:</b>0234425322129
                        </span>
                        <span>
                          <b>Color:</b>
                          {item.color}
                        </span>
                        <span>
                          <b>Size:</b> {item.size}
                        </span>
                      </div>
                    </div>
                    <div className={cx("priceDetail")}>
                      <div className={cx("AmountContainer")}>
                        <button onClick={() => handleDecrease(item)}>
                          <Remove />
                        </button>
                        <span>{item.quan}</span>
                        <button onClick={() => handleIncrese(item)}>
                          <Add />
                        </button>
                      </div>
                      <div className={cx("priceContainer")}>
                        <span>{item.price * item.quan} ¥</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("summary")}>
              <h1>ORDER SUMMARY</h1>
              <div className={cx("order")}>
                <p>Subtotal:</p>
                <span>{totalPrice} ¥</span>
              </div>
              <div className={cx("order")}>
                <p>Estimate Shipping:</p>
                <span>2000 ¥</span>
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
                <span>{totalPrice + 2000 - 5000} ¥</span>
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
