import styled from "./Slider.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

const cx = className.bind(styled);

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleGo = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    let id = setTimeout(() => {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }, 5000);
    return () => clearTimeout(id);
  }, [slideIndex]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("arrow", "left")} onClick={() => handleGo("left")}>
        <FontAwesomeIcon icon={faAngleLeft} className={cx("arrow-icon")} />
      </div>
      <div className={cx("content")}>
        {sliderItems.map((item, i) => (
          <div
            key={i}
            className={cx("slide")}
            style={{
              backgroundColor: `${item.bg}`,

              transform: `translateX(-${slideIndex * 100}%)`,
            }}
          >
            <div className={cx("imgContainer")}>
              <img src={item.img} alt="np" />
              <span
                className={cx("circle")}
                style={{
                  backgroundColor: item.circle,
                }}
              />
            </div>
            <div className={cx("infoContainer")}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Link to="/products">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={cx("arrow", "right")} onClick={() => handleGo("right")}>
        <FontAwesomeIcon icon={faAngleRight} className={cx("arrow-icon")} />
      </div>
    </div>
  );
}

export default Slider;
