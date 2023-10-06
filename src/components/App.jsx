import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/createAction';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#000000',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
