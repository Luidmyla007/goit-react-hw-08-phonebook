import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { TbTrash } from "react-icons/tb";


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handDelete = () => dispatch(deleteContact(id));
    return (
        <ListItem  key={id}>
            <span>{name}: {number}</span>
            <button  type="button" onClick={handDelete}><TbTrash/>Delete</button>
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,    
};


