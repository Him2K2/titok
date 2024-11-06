import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx("wrapper")}>
        <h1>Sidebar</h1>
        <a>hsjdfjksh</a>
    </aside>
}

export default Sidebar;