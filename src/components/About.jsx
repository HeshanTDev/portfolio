import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu } from 'lucide-react';
import styles from './About.module.css';
import meImage from '../assets/me.png';

const About = () => {
  const cards = [
    { icon: <Cpu size={20} />, title: "Backend", desc: "Java EE, Spring Boot, REST APIs" },
    { icon: <Zap size={20} />, title: "Frontend", desc: "Angular, TypeScript, CSS3" },
    { icon: <Database size={20} />, title: "Database", desc: "MySQL, PostgreSQL, Hibernate" },
    { icon: <Shield size={20} />, title: "Security", desc: "Auth, Secure API Design" }
  ];

  const quickStats = [
    { label: "Education", value: "BSc (Hons) Software Engineering" },
    { label: "Specialization", value: "Backend & Web Systems" },
    { label: "Location", value: "Colombo, Sri Lanka" }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.meshContainer}>
        <div className={styles.gridOverlay}></div>
      </div>
      <div className="container">
        <div className={styles.topGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.imageSide}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <img src={meImage} alt="Heshan Tharusha" className={styles.profileImg} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={styles.textSide}
          >
            <span className={styles.label}>The Profile</span>
            <h2 className={styles.title}>
              Heshan <span className={styles.purple}>Tharusha</span>
            </h2>
            <p className={styles.text}>
              Software Engineering undergraduate specializing in high-performance backend ecosystems and modern web architectures. 
              I transform complex requirements into scalable digital solutions.
            </p>

            <div className={styles.infoGrid}>
              {quickStats.map((stat, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{stat.label}</span>
                  <span className={styles.infoValue}>{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.skillsGrid}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className={styles.skillCard}
            >
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple helper for the icon since Database isn't imported
const Database = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export default About;
