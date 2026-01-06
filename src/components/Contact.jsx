import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting logic here
    alert("Message sent! (Demo mode)");
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.subHeading}>Get in touch</div>
          <h2 className={styles.title}>
            Let's work <br />
            <span className={styles.gradientText}>together</span>
          </h2>
          <p className={styles.description}>
            Have a project in mind? Looking to partner or work together? 
            Reach out through the form and I'll get back to you in the next 24 hours.
          </p>

          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Mail size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>heshant447@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Phone size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Phone</h4>
                <p>+94 71 982 6938</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <MapPin size={24} />
              </div>
              <div className={styles.infoContent}>
                <h4>Location</h4>
                <p>Sri Lanka</p>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div 
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className={styles.input} 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    className={styles.input} 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className={styles.input} 
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}>Message</label>
                <textarea 
                  name="message" 
                  className={styles.textarea} 
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
