import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload
} from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill out all fields');
      return;
    }

    try {
     await axios.post('http://localhost:3000/api/contact', { name, email, message });
      console.log('Form submitted:', formData);
      setSubmitted(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title" id="contact-heading">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or want to connect? Drop me a message or reach out directly.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:yuktamahajan404@gmail.com">yuktamahajan404@gmail.com</a>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Himachal Pradesh, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" aria-label="Send message">
            <span>Send Message</span>
            <FaPaperPlane className="submit-icon" />
          </button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/yukta-mahajan" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Yuktamahajan1999" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>
        </div>

        <a href="/path-to-resume.pdf" className="resume-button" download>
          <FaFileDownload className="resume-icon" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
