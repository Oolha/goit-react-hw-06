import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilterValue } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filterValue = useSelector((state) => state.contacts.filters.name);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (event) => {
    const value = event.target.value;

    const action = setFilterValue(value);

    dispatch(action);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

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
      <SearchBox value={filterValue} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={DeleteContact}
      />
    </div>
  );
}

export default App;
