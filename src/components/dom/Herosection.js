'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Button from '../dom/Button.js';
import styles from '../styles/HeroSection.module.css';

function WordsOnNewLines({ text, wordClass }) {
    return (
        <>
            {text.split(' ').map((word, idx) => (
                <span key={idx} className={wordClass} style={{ display: 'block' }}>
                    {word}
                </span>
            ))}
        </>
    );
}

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

                
                    <div className={`${styles.hero__title__wrapper} ${styles.hero__row1}`}>
                        <motion.h1
                            className={styles.hero__title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <WordsOnNewLines text="Your Partner for" wordClass={styles.hero__word} />
                        </motion.h1>
                        <motion.h1 className={styles.hero__scope}>
                            <WordsOnNewLines text="SATCOM Projects" wordClass={`${styles.hero__word} ${styles.h1}`} />
                        </motion.h1>
                    </div>
                    <motion.p
                        className={`${styles.hero__description} ${styles.hero__row2}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Whether you&apos;re looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we&apos;ve got you covered.
                        </motion.p><motion.p>At TST LUXKOM, we specialize in delivering seamless, reliable, and high-performance satellite communication solutions.
                        </motion.p>
                    

                    <motion.div
                        className={`${styles.hero__buttons} ${styles.hero__row3}`}
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
        </section>
    );
}