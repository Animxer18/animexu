import styles from "./styles.module.scss";
import SearchIcon from "@assets/icons/search.svg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import SearchResults from "@components/SearchResults";
import testImgSrc from "@assets/images/maneki-neko.png";
import { Link } from "react-router-dom";
import useDebounce from "@utils/hooks/useDebounce";

export default function Navbar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(true);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setShowResults(true);
  };

  return (
    <>
      <div className={styles["nav-bar"]}>
        <Link to="/">
          <div className={styles["logo"]}>
            <img src={testImgSrc} alt="Logo" />
            <h1>Animex</h1>
          </div>
        </Link>

        <div className={styles["search"]} ref={searchRef}>
          <div className={styles["search-bar"]}>
            <input type="text" placeholder="Search" onInput={handleInput} value={keyword} />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className={styles["results"]}>
            <div
              onClick={() => {
                setTimeout(() => {
                  setShowResults(false);
                }, 100);
              }}
            >
              {showResults && <SearchResults keyword={keyword} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
