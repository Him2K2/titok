import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [searchResult,setSearchResult] = useState([]);
  const [loading,setLoading] = useState(false);

    useEffect(() => {
      return () => {
        setShowResult(false);
      };
    }, []);



    useEffect(()=>{

      if(!searchValue.trim()){
        setSearchResult([])
        return;
      }

      setLoading(true);

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then(response => response.json())
      .then(response=>{
        setSearchResult(response.data);
        setLoading(false);
      }
      )
      .catch(console.error);
    },[searchValue]);

  const inputRef = useRef();

  const handleHideResult = () => {
    setShowResult(false);
    setSearchValue(" ");

  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h5 className={cx("search-title")}>Accounts</h5>
           {searchResult.map((item)=>(
             <AccountItem key={item.id} data={item}/>
           ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading &&(
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
              
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading &&<FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
