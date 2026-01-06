import React from 'react';
import { motion } from 'framer-motion';
import styles from './Work.module.css';
import pixeltImg from '../assets/pixelt.jpg';
import sweetImg from '../assets/sweet.jpg';


const projects = [
  { 
    id: 1, 
    title: 'PixelT', 
    category: 'E-commerce', 
    description: 'A comprehensive game shop platform featuring secure payments and intuitive inventory management.',
    tech: ['Java EE', 'Hibernate', 'MySQL', 'PayHere'],
    image: pixeltImg 
  },
  { 
    id: 2, 
    title: 'SweeT', 
    category: 'E-commerce', 
    description: 'A delightful cake store platform with a focus on seamless user experience and order tracking.',
    tech: ['PHP', 'HTML5', 'CSS3', 'PayHere'],
    image: sweetImg 
  }
];

const Work = () => {
  return (
    <section className={styles.work} id="work">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.header}
        >
            <h2 className={styles.title}>
              Project <span className={styles.purple}>Showcase</span>
            </h2>
            <p className={styles.subText}>
              A selection of my recent projects, showcasing my expertise in web development and software engineering.
            </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={styles.projectCard}
            >
              <div className={styles.mockupHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>

              <div className={styles.imageSide}>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              
              <div className={styles.infoSide}>
                <motion.span 
                  className={styles.category}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {project.category}
                </motion.span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <motion.span 
                      key={i} 
                      className={styles.techItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
