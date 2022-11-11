import styled from "./Announcement.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = className.bind(styled);

function Announcement() {
  const [announcement, setAnnouncement] = useState(true);

  return (
    <>
      {announcement && (
        <div className={cx("wrapper")}>
          <div className={cx("anounce")}>
            <p>Super Deal! Free Shipping on Order Over $50</p>
          </div>
          <div className={cx("icon")}>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setAnnouncement(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Announcement;
