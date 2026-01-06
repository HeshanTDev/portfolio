import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillLogos = [
  { name: "Java", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "Spring Boot", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { name: "Angular", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "PHP", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { name: "Hibernate", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg" },
  { name: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "HTML5", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
  { name: "React Native", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Git", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Figma", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.bgGlow}></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.label}>My Tech Stack</span>
          <h2 className={styles.title}>Technologies & <span className={styles.purple}>Tools</span></h2>
          <p className={styles.subtitle}>
            I leverage a modern ecosystem of tools to build robust applications.
          </p>
        </motion.div>

        <div className={styles.logoGrid}>
          {skillLogos.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.2,
                delay: (idx % 4) * 0.05,
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'var(--accent-purple)',
                transition: { duration: 0.2, delay: 0 }
              }}
              className={styles.logoCard}
            >
              <div className={styles.logoWrapper}>
                <img src={skill.url} alt={skill.name} className={styles.logoImg} />
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Marquee/Infinite Scroll Effect (Optional but added for extra style) */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {[...skillLogos, ...skillLogos, ...skillLogos].map((skill, idx) => (
              <span key={idx} className={styles.marqueeTag}>{skill.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
