import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/contacts/operations";
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Skeleton from '@mui/material/Skeleton';

import css from './ContactsList.module.css';

export const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const { filter } = useSelector(selectFilter);

    const dispatch = useDispatch();
    const handleDelete = (id) => dispatch(deleteContact(id));

    const getVisibleContacts = () => {
    const normalize = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalize))
    }

    const visibleContacts = getVisibleContacts();

    return <ul className={css.list}><p className={css.title}>Contacts:</p>{visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}> {isLoading ? <Skeleton variant="circular" width={40} height={40} /> :
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>}
                    {isLoading ? <Skeleton variant="text" width={300} height={40} /> : <ListItemText primary={name} secondary={number} />}
                    {isLoading ? <Skeleton variant="circular" width={20} height={20} /> : <IconButton aria-label="delete" type='button' onClick={() => handleDelete(id)} size="small">
                        <DeleteIcon title="delete" />
                    </IconButton>}
                </ListItem>))}
            </ul>
}
