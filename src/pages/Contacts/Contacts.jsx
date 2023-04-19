import { ContactForm } from 'components/ContactAddForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsContactsEmpty } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
// import { Helmet } from 'react-helmet';


const Contacts = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(selectIsContactsEmpty);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>     
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

export default Contacts;