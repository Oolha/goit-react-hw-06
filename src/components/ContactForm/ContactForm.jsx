import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Must be a valid phone number 'xxx-xx-xx'")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contactObject));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.box}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <div className={css.btnField}>
          <button type="submit" className={css.btn}>
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
