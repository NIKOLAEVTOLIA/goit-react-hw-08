import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
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
