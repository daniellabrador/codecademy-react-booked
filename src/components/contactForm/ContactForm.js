export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder="Name"
        value={name} onChange={setName}
      />
      <input
        type="tel" name="phone" id="phone" placeholder="Phone"
        pattern="(\()?(\+?((\d{1,2}-?)?\d{1,4}\s?)?)([1-9]\d{2}\)?[-.\s]?)(\d{3}[-.\s]?)(\d{4})"
        // (\()?                            (?
        // (\+?((\d{1,2}-?)?\d{1,4}\s?)?)   Country Code
          //  \+?                             +?
          //  ((\d{1,2}-?)?\d{1,4}\s?)?       Country code digits?
            //  (\d{1,2}-?)?                    2 digit prefix?
            //  \d{1,4}                         1-4 digits
            //  \s?                             Separator?
        // ([1-9]\d{2}\)?[-.\s]?)           First 3 digits (1 digit must be [1-9]) + Separator
        // (\d{3}[-.\s]?)                   First 3 digits + Separator
        // (\d{4})                         Last 4 digits
        value={phone} onChange={setPhone}
      />
      <input type="email" name="email" id="email"
        placeholder="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
        value={email} onChange={setEmail}
      />
      <input type="submit" />
    </form>
  );
};
