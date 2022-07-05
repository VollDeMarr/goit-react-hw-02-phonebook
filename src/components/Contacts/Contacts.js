const Contacts = ({ contacts, removeFn }) => {
  const ell = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => removeFn(contact.id)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{ell}</ul>;
};
export default Contacts;
