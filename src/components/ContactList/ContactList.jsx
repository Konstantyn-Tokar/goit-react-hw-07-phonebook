import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fatchContact } from "../../redux/operations";
import { getFilterContacts } from "../../helpers/filter";

import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash } from "react-icons/bs";

import s from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getFilterContacts(items, filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchContact());
  }, [dispatch]);

  return (
    <ListGroup as="ul" variant="flush">
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item as="li" className={s.item} key={id}>
          <div>
            <p className={s.text}>
              Name: <span className={s.text_d}>{name}</span>
            </p>
            <p className={s.text}>
              Number: <span className={s.text_d}>{number}</span>
            </p>
          </div>
          <button
            type="button"
            id={id}
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            <BsTrash />
          </button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
