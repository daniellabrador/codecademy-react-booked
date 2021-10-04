import { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact}) => {
  // Define state variables for contact info and duplicate check
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  
  const hasDuplicate = () => {
    for (let i=0; i<contacts.length; ++i){
      if (contacts[i].name.toLowerCase() === name.toLowerCase()){
        return true;
      }
    }
    return false;
  };

  const handleNameChange = ({ target }) => setName(target.value);
  const handlePhoneChange = ({ target }) => setPhone(target.value);
  const handleEmailChange = ({ target }) => setEmail(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasDuplicate()) return;
    if (!name || !phone || !email) return;
    addContact ({
      name: name,
      phone: phone,
      email: email
    })
    setName("");
    setPhone("");
    setEmail("");
  };

  // Using hooks, check for contact name in the contacts array variable in props
  useEffect(()=>{
    hasDuplicate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={handleNameChange}
          phone={phone}
          setPhone={handlePhoneChange}
          email={email}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          list={contacts}
        />
      </section>
    </div>
  );
};
