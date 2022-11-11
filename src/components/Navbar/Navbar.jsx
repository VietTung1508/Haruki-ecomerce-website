import styled from "./Navbar.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const cx = className.bind(styled);

function Navbar() {
  return (
    <div className={cx("container")}>
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
          <div>
            <Link to="/register">
              <button>REGISTER</button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button>SIGN IN</button>
            </Link>
          </div>
          <div className={cx("cart")}>
            <Badge badgeContent={3} color="primary">
              <ShoppingCart />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
