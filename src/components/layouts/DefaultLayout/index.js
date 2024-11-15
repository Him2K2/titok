import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx("wrapper")}>
        <Header></Header>
        <div className={cx("container")}>
            <Sidebar className={cx("sidebar")}></Sidebar>
            <div className={cx("content")}>
                {children}
            </div>

        </div>
        </div>
     );
}

export default DefaultLayout;