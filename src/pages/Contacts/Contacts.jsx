import { ContactForm } from 'components/ContactAddForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsContactsEmpty } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactContainer } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(selectIsContactsEmpty);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactContainer>     
      <ContactForm />   
      <h2>Contacts</h2>  
      <Filter />
      {isContactsEmpty ? (        
        <h2>Contactbook is empty, please add your first contact!</h2>
      ) : (
        <ContactList />  )}    
    </ContactContainer>
  );
};

export default Contacts;