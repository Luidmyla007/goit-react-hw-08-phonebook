import { ContactForm } from 'components/ContactAddForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsContactsEmpty, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';


export const PhoneBookPage = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(selectIsContactsEmpty);
  const Error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!Error) {
    return alert(`Oops, something went wrong`);
  }

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isContactsEmpty ? (
        <h2>Contactbook is empty, please add your first contact!</h2>
      ) : (
        <ContactList />  )}    
    </div>
  );
};