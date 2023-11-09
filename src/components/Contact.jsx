import React, { useState } from 'react';

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [hover, setHover] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setFormErrors({ ...formErrors, [name]: 'This field is required' });
    } else {
      setFormErrors({ ...formErrors, [name]: '' });
    }
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setFormErrors({ ...formErrors, [name]: 'Please enter a valid email address' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };


  const hoverStyle = {
    cursor: 'pointer',
    color: '#0077cc',
    textDecoration: 'underline',
  };

  const defaultStyle = {
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <section id="contact">
      <h2
        onClick={toggleFormVisibility}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={hover ? hoverStyle : defaultStyle}
      >
        {showForm ? 'Hide Contact Form' : 'Contact Me'}
      </h2>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={formValues.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.name && <div className="error">{formErrors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              autoComplete="off"
              value={formValues.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
            {formErrors.message && <div className="error">{formErrors.message}</div>}
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
