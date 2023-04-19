import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handDelete = () => dispatch(deleteContact(id));
    return (
        <ListItem  key={id}>
            <span>{name}: {number}</span>
            <button  type="button" onClick={handDelete}>Delete</button>
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,    
};


