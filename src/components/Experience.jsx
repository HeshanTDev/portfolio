import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  { 
    year: '2023 - Present', 
    company: 'Birmingham City University', 
    role: 'BSc (Hons) in Software Engineering',
    description: 'Affiliated with Java Institute for Advanced Technology. Focused on advanced software engineering principles and full-stack development.'
  },
  { 
    year: '2024', 
    company: 'Cyberbot', 
    role: 'Frontend Contributor',
    description: 'Developed quotation generation modules and improved UI structure for a computer shop platform using HTML, CSS, and JS.'
  },
  { 
    year: '2023', 
    company: 'DesignerMerge & Divine Portal', 
    role: 'WordPress Customizer',
    description: 'Customized e-commerce themes, managed product listings, and optimized layouts for better user engagement.'
  },
  { 
    year: '2023', 
    company: 'Sri Sudarshana Vidyalaya', 
    role: 'G.C.E. Ordinary Level',
    description: 'Completed secondary education with strong academic performance.'
  }
];

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.label}>My Journey</span>
          <h2 className={styles.title}>Experience</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={styles.item}
            >
              <div className={styles.left}>
                <span className={styles.year}>{exp.year}</span>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.company}>{exp.company}</h3>
                <h4 className={styles.role}>{exp.role}</h4>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
