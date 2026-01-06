import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <motion.div 
              className={styles.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Heshan Tharusha<span style={{ color: 'var(--accent-purple)' }}>.</span>
            </motion.div>
            <motion.p 
              className={styles.tagline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Building digital experiences with passion, precision, and a touch of magic.
            </motion.p>
          </div>
          
          <motion.div 
            className={styles.socials}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://github.com/HeshanTDev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Github">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/heshan-tharusha-877303308" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
        
        <div className={styles.bottomBars}>
          <div className={styles.copyright}>
            © {currentYear} Heshan Tharusha. All rights reserved.
          </div>
          <div className={styles.links}>
            <a href="#about" className={styles.link}>About</a>
            <a href="#work" className={styles.link}>Work</a>
            <a href="#experience" className={styles.link}>Journey</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
