import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Experience />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </div>
  )
}

export default App
