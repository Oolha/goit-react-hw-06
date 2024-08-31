import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.search}>
      <span>Find contacts by me</span>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
