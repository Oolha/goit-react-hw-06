import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ id, name, number, onDelete }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <p>
        <FaUser className={css.icon} size="14px" />
        {name}
      </p>
      <p>
        <FaPhone className={css.icon} size="14px" />
        {number}
      </p>
      <button type="button" onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </>
  );
};

export default Contact;
