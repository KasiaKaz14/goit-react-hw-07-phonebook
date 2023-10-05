import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/createAction';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        name="filter"
        type="text"
        placeholder="Find contact by name"
        onChange={handleChange}
        filter={filter}
      />
    </label>
  );
};
