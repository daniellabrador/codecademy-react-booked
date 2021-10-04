import ContactPicker from '../contactPicker/ContactPicker';

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="title" placeholder="Title"
        value={title} onChange={setTitle} required
      />
      <ContactPicker
        contacts={contacts}
        contact={contact}
        setContact={setContact}
      />
      <input type="date" name="date" id="date" min={getTodayString()}
        value={date} onChange={setDate} required
      />
      <input type="time" name="time" id="time"
        value={time} onChange={setTime} required
      />
      <input type="submit" />
    </form>
  );
};

export default AppointmentForm;
