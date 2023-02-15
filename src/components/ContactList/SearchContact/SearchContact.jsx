import styles from './SearchContact.module.scss';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

const SearchContact = () => {
  const dispatch = useDispatch();

  const hendleChange = ({ target }) => {
    const filterWord = target.value.toLowerCase();
    dispatch(setFilter(filterWord));
  };

  const { text, input } = styles;

  return (
    <>
      <p className={text}>Fined contact name</p>
      <input onChange={hendleChange} type="text" className={input} />
    </>
  );
};

export default SearchContact;
