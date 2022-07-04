const Contacts = ({ contacts }) => {
//   console.log(contacts);
  const ell = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
    </li>
  ));

  return <ul>{ell}</ul>;
};
export default Contacts;
