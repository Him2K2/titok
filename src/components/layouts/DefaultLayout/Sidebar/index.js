import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import { HomeIcon,FollowingIcon,LiveIcon } from "../../../Icons";

import routes from "../../../../config/routes";

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx("wrapper")}>
        <Menu>
            <MenuItem title="For Your" to={routes.home} icon={<HomeIcon></HomeIcon>}></MenuItem>
            <MenuItem title="Following" to={routes.follwing} icon={<FollowingIcon></FollowingIcon>}></MenuItem>
            <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon></LiveIcon>}></MenuItem>
        </Menu>
    </aside>
}

export default Sidebar;