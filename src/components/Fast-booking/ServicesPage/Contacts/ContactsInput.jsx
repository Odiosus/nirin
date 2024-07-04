import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Contacts.module.css";

export default function ContactsInput({
  placeholder,
  type,
  width,
  setData,
  disabled,
}) {
  return (
    <input
      className={styles.contactsInput}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={{ width: width }}
      onChange={(e) => setData(e.target.value)}
    />
  );
}
