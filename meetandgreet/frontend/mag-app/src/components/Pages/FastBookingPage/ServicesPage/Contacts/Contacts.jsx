import styles from "./Contacts.module.css";
import ContactsInput from "./ContactsInput";

export default function Contacts({
  setFullName,
  setPhone,
  setEmail,
  disabled,
}) {
  return (
    <div className={styles.contacts}>
      <ContactsInput
        placeholder="Your name & surname"
        type="text"
        width="630px"
        setData={setFullName}
        disabled={disabled}
      />
      <ContactsInput
        placeholder="Phone"
        type="phone"
        width="305px"
        setData={setPhone}
        disabled={disabled}
      />
      <ContactsInput
        placeholder="Email"
        type="email"
        width="305px"
        setData={setEmail}
        disabled={disabled}
      />
    </div>
  );
}
