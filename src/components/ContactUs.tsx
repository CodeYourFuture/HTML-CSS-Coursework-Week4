import React from 'react';
import '../css/contact.scss';

const ContactUs = () => {
  return (
        <section className="contact" id="contact">
        <div className="form-container">
          <h3>FOR SPECIAL REQUESTS & ORDERS</h3>
          <span className="underline">_</span>
          <form>
            <label className="half-width">
              First Name *
              <input type="text" name="first-name" id="first-name" required />
            </label>
            <label className="half-width">
              Last Name *
              <input type="text" name="last-name" id="last-name" required />
            </label>
            <label>
              Email *
              <input type="email" name="email" id="email" required />
            </label>
            <label>
              Phone
              <input type="number" name="phone" id="phone" />
            </label>
            <label>
              Message
              <textarea name="message" id="message"></textarea>
            </label>
            <button type="submit" className="button">Send</button>
          </form>
        </div>
      </section>
  );
};

export default ContactUs;
