import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './Filter/Filter';
import contactsDefault from '../contacts.json';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      setContacts(
        localStorage.getItem('phonebook-contacts')
          ? JSON.parse(localStorage.getItem('phonebook-contacts'))
          : contactsDefault
      );
      // console.log('One time mount, get contacts from localStorage or default');
      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('phonebook-contacts', JSON.stringify(contacts));
    //console.log('post contacts to localStorage if changed');
  }, [contacts]);

  const onFormSubmit = newContact => {
    const availableInContactsList = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );
    if (availableInContactsList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    newContact.id = nanoid();
    setContacts(prevState => [newContact, ...prevState]);
  };

  const filterContactsHandler = filterValue => {
    setFilterValue(filterValue);
  };

  const filteredContactsList = () =>
    filterValue.trim()
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
        )
      : contacts;

  const deleteContactItem = id => {
    const contactsList = contacts.filter(contact => contact.id !== id);
    setContacts(() => [...contactsList]);
  };

  const resetFilterValue = () => setFilterValue('');

  return (
    <div
      style={{
        display: 'block',
        marginLeft: '20px',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Phonebook formSubmitHandler={onFormSubmit} />
      </Section>
      <Section title="Contacts">
        <>
          <FilterContacts
            filterValue={filterValue}
            filterContactsHandler={filterContactsHandler}
            resetFilterValue={resetFilterValue}
          />
          {contacts.length === 0 ? (
            <h2>Your PhoneBook is empty:(</h2>
          ) : (
            <ContactsList
              contactsList={filterValue ? filteredContactsList() : contacts}
              deleteContactItem={deleteContactItem}
            />
          )}
        </>
      </Section>
    </div>
  );
}
