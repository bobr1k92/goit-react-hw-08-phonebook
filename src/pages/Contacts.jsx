import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectError } from "redux/contacts/selectors";
import Notiflix from "notiflix";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "../components/Filter/Filter";
import { ContactForm } from "../components/ContactForm/ContactForm";
import css from "./Contacts.module.css";


export default function Contacts() {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const items = useSelector(selectContacts);
  
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
  

    return (
        <div className={css.container}>
            <ContactForm />
            {items.length > 0 && <div className={css.contacts__wrapper}>
                <Filter />
                {error && Notiflix.Notify.failure('Error')}
                <ContactsList />
            </div>}
      </div>
    )
}