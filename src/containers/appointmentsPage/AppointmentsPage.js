import React, { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage =
({ appointments, contacts, addAppointment }) => {
  // Define state variables for appointment info
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("*");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleContactChange = ({ target }) => setContact(target.value);
  const handleDateChange = ({ target }) => setDate(target.value);
  const handleTimeChange = ({ target }) => setTime(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !contact || contact==="*" || !date || !time) return;
    addAppointment({
      title: title,
      contact: contact,
      date: date,
      time: time
    })
    setTitle("");
    setContact("*");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={handleTitleChange}
          contacts={contacts}
          contact={contact}
          setContact={handleContactChange}
          date={date}
          setDate={handleDateChange}
          time={time}
          setTime={handleTimeChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          list={appointments}
        />
      </section>
    </div>
  );
};
