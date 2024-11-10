import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css"; // optional
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faQuestion,
  faRightToBracket,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const Menu_Items = [
  {
    icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "vn",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "EngLish",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/keyboard",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  const currentUser = 1;

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TITOK"></img>
        </div>

        <HeadlessTippy
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                result
                <h5 className={cx("search-title")}>Accounts</h5>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            ></input>
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        {currentUser ? (
          <div className={cx("current-user")}>
            <Tippy content="Upload Video" placement="bottom">
              <Button className={cx("upload-btn")} >
                <FontAwesomeIcon icon={faPlus} /> Upload
              </Button>
            </Tippy>

            <button className={cx("i-mess")}>
              <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            </button>
            <img
              src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=66038&refresh_token=27f2ea86c4707c8f1dbe7d48cabf8802&x-expires=1731384000&x-signature=TF6ApIdLI%2Fj%2FG83MJQpvrTaI2QY%3D&shp=a5d48078&shcp=81f88b70"
              className={cx("avata-user")}
            ></img>
          </div>
        ) : (
          <div className={cx("actions")}>
            <Button text>UpLoad</Button>
            <Button
              primary
              rightIcon={<FontAwesomeIcon icon={faRightToBracket} />}
            >
              Login
            </Button>
            <Menu items={Menu_Items}>
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
