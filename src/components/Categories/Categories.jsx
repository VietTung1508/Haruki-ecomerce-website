import className from "classnames/bind";
import style from "./Categories.module.scss";
import { categories } from "../../data";
import CategoriesItem from "./components/CategoriesItem";

const cx = className.bind(style);

function Categories() {
  return (
    <div className={cx("wrapper")}>
      {categories.map((categori, i) => (
        <CategoriesItem key={i} item={categori} />
      ))}
    </div>
  );
}

export default Categories;
