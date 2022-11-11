import styled from "./Register.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const cx = className.bind(styled);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("exit")}>
        <Link to="/">
          <ArrowBack />
        </Link>
      </div>
      <div className={cx("box")}>
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <input type="text" placeholder="First Name..." required />
          <input type="text" placeholder="Last Name..." required />
          <input type="text" placeholder="Username..." required />
          <input type="text" placeholder="Email..." required />
          <input type="text" placeholder="Password..." required />
          <input type="text" placeholder="Confirm Password..." required />
          <span>
            By creating an account, i consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>Create</button>
        </form>
        <Link to="/login">
          <p>Already have an account</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
