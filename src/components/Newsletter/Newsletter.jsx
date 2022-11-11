import style from "./Newsletter.module.scss";
import className from "classnames/bind";
import { Send } from "@mui/icons-material";

const cx = className.bind(style);

function Newsletter() {
  return (
    <div className={cx("wrapper")}>
      <h1>NEWSLETTER</h1>
      <p>Get timely updates from your favorite product.</p>
      <form
        className={cx("inp")}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Your Email..." required />
        <button>
          <Send />
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
