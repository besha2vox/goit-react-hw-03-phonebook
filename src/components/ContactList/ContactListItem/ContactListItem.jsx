import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactListItem = ({ name, number, id }) => {
  const { item, text, btn } = styles;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={item}>
      <button onClick={handleDelete} type="button" className={btn}>
        Delete
      </button>
      <p className={text}>
        {name}: {number}
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactListItem;
