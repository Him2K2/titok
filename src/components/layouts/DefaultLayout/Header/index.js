
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
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons/faBitcoin";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import Image from "../../../Image";

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
  

  const currentUser = 1;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "View profile",
      to:"/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon>,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: "Setting",
      to:"/setting"
    },
    ...Menu_Items,
    {
      icon: <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>,
      title: "Light Mode",
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
      title: "Log Out",
      separate:true,
    },
  ];

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

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <div className={cx("current-user")}>
                <Tippy content="Upload Video" placement="bottom">
                  <Button className={cx("upload-btn")}>
                    <FontAwesomeIcon icon={faPlus} /> Upload
                  </Button>
                </Tippy>

                <button className={cx("i-mess")}>
                  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                </button>
              </div>
            </>
          ) : (
            <>
              <Button text>UpLoad</Button>
              <Button
                primary
                rightIcon={<FontAwesomeIcon icon={faRightToBracket} />}
              >
                Login
              </Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : Menu_Items}>
            {currentUser ? (
              <Image
                src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/465729102_3792607924295047_7374233543698085958_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeEC4ZLlH9abuxomL99gNgODw0FF1wGV2-HDQUXXAZXb4VrOuUUNH38qE5faQCo7jjbFUJFM9gJB_RdU0DlQMkHk&_nc_ohc=CHqPTHJR3ksQ7kNvgFDQg01&_nc_zt=24&_nc_ht=scontent.fhan5-10.fna&_nc_gid=AcA9Y_175hZ-QwctgxV-BXI&oh=00_AYD7Gk0bMrBGM17Z4Fv7_u-UGAllmiUXmjLHFROS6NN_cw&oe=67365C9D"
                className={cx("avata-user")}
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
