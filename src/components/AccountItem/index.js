import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/448827082_1525088601759228_2449551855628542546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEta2_WYEgPp69BOeY7hFcyPg3jA5DbWLM-DeMDkNtYs7SKX8qZNFzMOlskevA3m5swi0D-PdHGSYT2Xp-iehNn&_nc_ohc=rVYgmZVjQvkQ7kNvgH16Eyz&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=A47SwRliAmBiD_u6otxgP2c&oh=00_AYBQrtPulzkFGlZU6GLDiOX7fUBj5i1Zy0aXbuBmdAK7Rw&oe=6728CF75"
        alt="img"
      ></img>
     
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
