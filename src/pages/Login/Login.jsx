import styled from "./Login.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const cx = className.bind(styled);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("exit")}>
        <Link to="/">
          <ArrowBack />
        </Link>
      </div>
      <div className={cx("box")}>
        <h1>SIGN IN</h1>
        <form>
          <input type="text" placeholder="Username..." required />
          <input type="text" placeholder="Password..." required />

          <button>Create</button>
        </form>
        <span>
          DO YOU FORGET THE PASSWORD , DON'T WORRY WE CAN HELP{" "}
          <b>Retrive The Password</b>
        </span>
        <Link to="/register">
          <p>Create A New Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
