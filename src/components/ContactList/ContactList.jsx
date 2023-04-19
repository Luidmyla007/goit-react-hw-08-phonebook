import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from "components/ContactItem/ContactItem";
import { selectFilterValue } from 'redux/filter/selectors';

export const ContactList = () => {  
  const contacts = useSelector(selectFilterValue); 
  
  return (   
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}            
        />
      ))}
    </ul>    
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

