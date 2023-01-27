import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';

const ContactListItem = ({ name, number, id, removeContact }) => {
  const { item, text, btn } = styles;

  return (
    <li className={item}>
      <button onClick={() => removeContact(id)} type="button" className={btn}>
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
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
