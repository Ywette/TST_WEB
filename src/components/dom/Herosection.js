'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Button from '../dom/Button.js';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    const sectionRef = useRef(null);

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
        <section id="home" className={styles.section}>
            <div className={styles.hero__container}>

                {/* hero-titles */}
                <div className={styles.hero__title_wrapper}>
                    <motion.h1
                        className={styles.hero__title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        your partner for
                    </motion.h1>
                    <motion.h1 className={`${styles.hero__title} ${styles.hero__title_colors}`}>
                        satcom projects
                    </motion.h1>
                </div>

                {/* hero-description */}
                <div className={`${styles.hero__description_wrapper} ${styles.hero__description}`}>
                    <motion.p
                    className={styles.hero__description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    >
                    Whether you&apos;re looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we&apos;ve got you covered.
                </motion.p>
                    <motion.p className={styles.hero__description}>Delivering seamless, reliable, and high-performance satellite communication solutions.
                    </motion.p>
                </div>
                {/* hero_buttons */}

                <motion.div className={styles.hero__buttons}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
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
                </motion.div>
            </div>

        </section >
    );
}