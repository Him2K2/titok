import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import Menu_Items from "./MenuItems";

import { Wrapper as PopperWrapper } from "../../../components/Popper";
import Language from "./Language";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  

  const [history,setHistory] = useState([{data:items}]);
  const current = history[history.length-1];

  const callBack = ()=>{
    setHistory(prev=>prev.slice(0, prev.length -1 ))
  }

  const renderItems = () => {
    return current.data.map((i, index) => {

      const isParent = !!i.children;
      return <Menu_Items key={index} data={i} onClick={()=>{
        if(isParent){
          setHistory(prev =>[...prev, i.children])
        }
      }}></Menu_Items>
    });
  };
  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
          <PopperWrapper>

            {history.length>1 && <Language onBack={callBack} title="Language"></Language>}

            {renderItems()}
          
          </PopperWrapper>
        </div>
      )}
       onHide={()=>setHistory((prev)=>prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
