import React from "react";

const ContactPicker = ({ contacts, contact, setContact }) => {
  if (!contacts) return (
    <select name="contact" id="contact-select"
    onChange={setContact} value={contact} required>
      <option value="*" disabled>-- Select a contact --</option>
    </select>
  );
  return (
    <select name="contact" id="contact-select"
    onChange={setContact} value={contact} required>
      <option value="*" disabled>-- Select a contact --</option>
      {contacts.map(contact=>{
        return (
          <option value={contact.name}>{contact.name}</option>
        )
      })}
    </select>
  );
};

export default ContactPicker;
