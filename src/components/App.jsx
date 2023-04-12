import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { GlobalStyle } from './GlobalStyles';
import { Container } from './App.styled';
import { ContactStyled } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => { 
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
     return (
     <Container>
         <GlobalStyle/>        
        <ContactForm />        
        <ContactStyled>
          <h2>Contacts</h2>
          <Filter/>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList/>          
        </ContactStyled>
     </Container>
  );
};


















