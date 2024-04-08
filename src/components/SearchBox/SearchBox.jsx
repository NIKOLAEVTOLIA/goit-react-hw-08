import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = event => {
    const searchTerm = event.target.value;
    dispatch(changeFilter(searchTerm));
  };

  return (
    <input
      className={css.inputSearch}
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
