import React, { useState } from 'react';
import "./Contact.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const storeData = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="container1">
          {isSubmitted ? (
            <div className="thank-you-message">Thanks for filling out the form!</div>
          ) : (
            <>
              <h2 className="contact-heading">Contact Me</h2>
              <form onSubmit={storeData}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name" value={formData.firstname} onChange={handleChange} required />
                
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name" value={formData.lastname} onChange={handleChange} required />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Your message" style={{ height: '200px' }} value={formData.subject} onChange={handleChange} required />
                
                <input type="submit" value="Submit" />
              </form>
            </>
          )}
        </div>
    );
}


export default ContactForm;
