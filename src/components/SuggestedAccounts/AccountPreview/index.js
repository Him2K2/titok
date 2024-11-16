import styles from "./AccountPreview.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "../../Popper";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <PopperWrapper>
      <div className={cx("preview")} tabIndex={"-1"}>
        <header className={cx("header")}>
          <img
            className={cx("avatar")}
            alt="cl"
            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/448827082_1525088601759228_2449551855628542546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEta2_WYEgPp69BOeY7hFcyPg3jA5DbWLM-DeMDkNtYs7SKX8qZNFzMOlskevA3m5swi0D-PdHGSYT2Xp-iehNn&_nc_ohc=MJGTROlkICsQ7kNvgHCSzCT&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=A_s0Z1Fp-WWMLH5e3lA1hNs&oh=00_AYAcLANCRoqMsMBGz4Uw2_ZaX1e3p6_wfbsJ6UZw9W5akg&oe=673D0675"
          ></img>
          <Button primary small>
            Follow
          </Button>
        </header>
        <body className={cx("body")}>
          <p className={cx("nickname")}>
            <strong  >yenlk2</strong>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faCheckCircle}
            ></FontAwesomeIcon>
          </p>
          <p className={cx("name")}>Nguyens thi yen</p>
          <p className={cx("analytics")}>
            Follower:<p className={cx("valuefl")}>8.2M</p>
            Likes: <p className={cx("valuelike")}>100M</p>
          </p>
        </body>
      </div>
    </PopperWrapper>
  );
}

export default AccountPreview;
