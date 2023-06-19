import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from "redux/contacts/selectors";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break;
            
            case 'number':
                setNumber(value)
                break;
        
            default:
                return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        
        const addedContacts = getAddedContacts(name);
        (addedContacts) ?
            Notiflix.Notify.warning(`${name} is already in contacts`) :
            dispatch(addContact({ name: form.elements.name.value, number: form.elements.number.value }));

        setName('');
        setNumber('');
    }

    const getAddedContacts = (name) => {
        return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    }


    return (
        <div className={css.container}>
            <p className={css.title}>To add a contact, enter the name and phone number</p>
            <div>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                className={css.container__phonenumber}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleChange}/>
                    <TextField
                        id="standard-basic"
                        label="Number"
                        variant="standard"
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleChange}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" aria-label="add" type='submit' size="small">
                            <AddIcon />
                        </Fab>
                    </Box>
                </Box>
            </div>
        </div>
    )
}