import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Tippy from "@tippyjs/react";
import AccountPreview from "./AccountPreview";



const cx = classNames.bind(styles);

function AccountItem() {

  return (
    <div>
      <Tippy
        interactive
        delay={[800,0]}
        placement="bottom"

        render={()=>(
          <AccountPreview></AccountPreview>
        )}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avata")}
            alt="anh"
            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/448827082_1525088601759228_2449551855628542546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEta2_WYEgPp69BOeY7hFcyPg3jA5DbWLM-DeMDkNtYs7SKX8qZNFzMOlskevA3m5swi0D-PdHGSYT2Xp-iehNn&_nc_ohc=MJGTROlkICsQ7kNvgHCSzCT&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=A_s0Z1Fp-WWMLH5e3lA1hNs&oh=00_AYAcLANCRoqMsMBGz4Uw2_ZaX1e3p6_wfbsJ6UZw9W5akg&oe=673D0675"
          ></img>
          <div className={cx("infor")}>
            <p className={cx("nickname")}>
              <strong>yenlk2</strong>
              <FontAwesomeIcon
                className={cx("icon")}
                icon={faCheckCircle}
              ></FontAwesomeIcon>
            </p>
            <p className={cx("name")}>Nguyenx thiu yeehns</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
