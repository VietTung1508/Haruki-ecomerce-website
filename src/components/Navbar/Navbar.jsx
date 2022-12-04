import styled from "./Navbar.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const cx = className.bind(styled);

function Navbar() {
  const [fix, setFixed] = useState(false);
  const cartAmount = useSelector((state) => state.cart.products);

  const setFix = () => {
    if (window.scrollY > 200) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", setFix);

  return (
    <div className={cx(fix ? "containerFixed" : "container")}>
      <div className={cx("wrapper")}>
        <div className={cx("left")}>
          <select>
            <option>En</option>
            <option>Vn</option>
            <option>Kr</option>
            <option>Jp</option>
          </select>
          <div className={cx("search")}>
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
          </div>
        </div>
        <div className={cx("center")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>HARUKI</h1>
          </Link>
        </div>
        <div className={cx("right")}>
          <div className={cx("user")}>
            <Link to="/register">
              <button>REGISTER</button>
            </Link>
          </div>
          <div>
            <Link to="/login" className={cx("user")}>
              <button>SIGN IN</button>
            </Link>
          </div>
          <div className={cx("deskUser")}>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className={cx("cart")}>
            <Badge badgeContent={cartAmount.length} color="primary">
              <Link to="/cart">
                <ShoppingCart />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
