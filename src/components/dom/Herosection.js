'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Button from '../dom/Button.js';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    const [typeKey, setTypeKey] = useState(0);
    const sectionRef = useRef(null);

    // Change key on mount (page load)
    useEffect(() => {
        setTypeKey(Date.now());
    }, []);

    // Section visibility for animation on scroll
    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (!isVisible) {
                section.classList.add('section-hidden');
            } else {
                section.classList.remove('section-hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.section id="home" className={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}>

            <div className={styles.hero__container}>

                {/* hero-titles */}
                <div className={styles.hero__title_wrapper}>
                    <h1
                        key={typeKey}
                        className={`${styles.hero__title} ${styles.hero__title_colors} ${styles.typewriter}`}
                    >
                        TST Luxkom S.A.R.L
                    </h1>

                    <h1
                        className={styles.hero__title}

                    >
                        your partner for satcom projects
                    </h1>
                </div>

                {/* hero-description */}
                {/* <div className={`${styles.hero__description_wrapper} ${styles.hero__description}`}>
                    <p
                        className={styles.hero__description}
                    >
                        Whether you&apos;re looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we&apos;ve got you covered.
                    </p>
                    <p className={styles.hero__description}>Delivering seamless, reliable, and high-performance satellite communication solutions.
                    </p>
                </div> */}
                {/* hero_buttons */}

                <div className={styles.hero__buttons}
                >
                    <Link href="#services">
                        <Button
                            className={`${styles.hero__button} ${styles.primary}`}
                            variant="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                            Discover Services
                        </Button>
                    </Link>

                    <Button className={`${styles.hero__button} ${styles.secondary}`}
                        variant="secondary"
                        disabled
                    >
                        Tell About Your Project
                    </Button>
                </div>
            </div>

        </motion.section >
    );
}