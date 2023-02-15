import shortid from 'shortid';

const addContacts = ({ name, number }) => {
  return {
    type: 'contacts/addContacts',
    payload: {
      id: shortid(),
      name,
      number,
    },
  };
};

const deleteContacts = contactId => {
  return {
    type: 'contacts/deleteContacts',
    payload: { ...contactId },
  };
};

const setFilter = filter => {
  return {
    type: 'filters/setFilter',
    payload: { filter },
  };
};

export { addContacts, deleteContacts, setFilter };
