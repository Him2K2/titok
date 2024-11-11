import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/448827082_1525088601759228_2449551855628542546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEta2_WYEgPp69BOeY7hFcyPg3jA5DbWLM-DeMDkNtYs7SKX8qZNFzMOlskevA3m5swi0D-PdHGSYT2Xp-iehNn&_nc_ohc=AXvhO_wAOVQQ7kNvgGrWixd&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=Aejg5GJctTJX4Dia94RKv6o&oh=00_AYBvCeJLtaFnnveGIiGp97rBM2jjVymWVoO6jvYgf_sHuA&oe=672FD775"
        alt="img"
      ></Image>
     
      <div className={cx("info")}>
      <h5 className={cx("name")}>
        Name
        <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle}></FontAwesomeIcon>
      </h5>
     
      <span className={cx("username")}>username</span>
      </div>
      
    </div>
  );
}

export default AccountItem;
