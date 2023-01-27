import styles from './SearchContact.module.scss';
import PropTypes from 'prop-types';

const SearchContact = ({ searchContact }) => {
  const { text, input } = styles;

  return (
    <>
      <p className={text}>Fined contact name</p>
      <input
        onChange={e => searchContact(e.target.value)}
        type="text"
        className={input}
      />
    </>
  );
};

SearchContact.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default SearchContact;
