import ConstactsItem from 'components/ContactsItem/ContactsItem';
import style from './ContactList.module.css';

export default function ConstactsList({ items, onDeleteContact }) {
  const contacts = items.map(({ id, name, number }) => (
    <ConstactsItem
      key={id}
      id={id}
      name={name}
      number={number}
      onDeleteContact={onDeleteContact}
    />
  ));
  return (
    <div className={style.boxlist}>
      <ul className={style.list}>{contacts}</ul>
    </div>
  );
}
/* <li key ={id} > name: {name}, number: {number} <button type ="button" onClick={() => deleteContact(id)}>Delete</button></li> */
