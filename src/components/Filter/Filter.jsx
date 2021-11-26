import { useSelector, useDispatch } from "react-redux";
import { handelChangeFilter } from "../../redux/action";
import Form from "react-bootstrap/Form";

export default function Filter() {
  const filter = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        className="form-control-my"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(handelChangeFilter(e.currentTarget.value))}
        autoComplete="off"
      />
    </>
  );
}
