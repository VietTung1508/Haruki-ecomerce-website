import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import className from "classnames/bind";
import style from "./Footer.module.scss";

const cx = className.bind(style);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <h2>HARUKI</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={cx("socials")}>
          <div
            className={cx("icon")}
            style={{
              backgroundColor: "#3B5999",
            }}
          >
            <Facebook />
          </div>
          <div
            className={cx("icon")}
            style={{
              backgroundColor: "#E4405F",
            }}
          >
            <Instagram />
          </div>
          <div
            className={cx("icon")}
            style={{
              backgroundColor: "#55ACEE",
            }}
          >
            <Twitter />
          </div>
          <div
            className={cx("icon")}
            style={{
              backgroundColor: "#E60023",
            }}
          >
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={cx("center")}>
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className={cx("right")}>
        <h3>Contact Us</h3>
        <div className={cx("ct")}>
          <Room />
          <p>486 Nakasujicho, Nakagyo Ward, Kyoto, Japan</p>
        </div>
        <div className={cx("ct")}>
          <Phone /> <p>+84 986 074 833</p>
        </div>
        <div className={cx("ct")}>
          <MailOutline /> <p>haruki@gmail.dev</p>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
