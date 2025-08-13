'use client'

import { Canvas } from '@react-three/fiber';
import styles from './page.module.css';
// import SatelliteScene from '@/components/canvas/SatelliteScene';
import HeroSection from '../components/dom/Herosection.js';
import About from '../components/dom/About.js';
import Services from '../components/dom/Services';
import Partners from '../components/dom/Partners';
import StarBackgroundContainer from '../components/canvas/StarBackgroundContainer';
import ContactSection from '../components/dom/ContactSection';

export default function Home() {
  
  return (
    <div className={styles.page}>
      <StarBackgroundContainer />
      {/* Hero section with 3D Canvas */}
      
        {/* <Canvas>
          <SatelliteScene />
        </Canvas> */}
        <HeroSection />
        {/* <Services /> */}
        {/* <About />         */}
        {/* <Partners /> */}
        {/* <ContactSection  /> */}
      </div>
      
      
  
  );
}