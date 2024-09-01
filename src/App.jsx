import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";

import { changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();

  const addContactForm = (contactObject) => {
    dispatch(addContact(contactObject));
  };

  const DeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContactForm} />
      <SearchBox />
      <ContactList onDeleteContact={DeleteContact} />
    </div>
  );
}

export default App;
