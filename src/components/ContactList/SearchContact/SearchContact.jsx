import styles from './SearchContact.module.scss';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const SearchContact = () => {
  const dispatch = useDispatch();

  const hendleChange = ({ target }) => {
    const filterWord = target.value.toLowerCase();
    dispatch(setFilter(filterWord));
  };

  const { text, input } = styles;

  return (
    <>
      <p className={text}>Search for a contact by name</p>
      <input
        onChange={hendleChange}
        type="text"
        className={input}
        placeholder="Enter name"
      />
    </>
  );
};

export default SearchContact;
