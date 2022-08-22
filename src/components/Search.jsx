import styles from "./Search.module.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          value={search ?? ""}
          onChange={(e) => {
            const value = encodeURIComponent(e.target.value);
            history("/?search=" + value);
          }}
        />
        <FaSearch className={styles.searchButtonr} color="black"/>
      </div>
    </form>
  );
}
