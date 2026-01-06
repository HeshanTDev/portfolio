import React from 'react';
import { ArrowUpRight, Code, Layout, Smartphone } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Abstract Background Elements */}
      <div className={styles.meshContainer}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.grid}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topLabel}>
            <span className={styles.dot}></span>
            Available for new opportunities
          </div>

          <h1 className={styles.title}>
            CRAFTING <span className={styles.italic}>DIGITAL</span> <br />
            <span className={styles.gradientText}>EXPERIENCES</span>
          </h1>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Breaking the boundaries of conventional design to build 
              immersive products that drive impact and emotion.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#work" className="btn-primary">
                View My Work <ArrowUpRight size={20} />
              </a>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.floatingTags}>
          <div 
            className={styles.tag}
            style={{ 
              animation: 'float1 4s ease-in-out infinite'
            }}
          >
            <Code size={16} /> Technical
          </div>

          <div 
            className={styles.tag}
            style={{ 
              animation: 'float2 5s ease-in-out infinite'
            }}
          >
            <Layout size={16} /> Creative
          </div>

          <div 
            className={styles.tag}
            style={{ 
              animation: 'float3 4.5s ease-in-out infinite'
            }}
          >
            <Smartphone size={16} /> Adaptive
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.line}></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
