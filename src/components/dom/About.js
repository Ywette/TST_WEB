"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/About.module.css';
import Link from 'next/link';

const aboutData = [
  {
    title: 'Mission',
    text: 'To deliver reliable and high-performance satellite communication solutions, enabling seamless global connectivity for clients in critical sectors.',
    icon: '/compass-icon.svg',
    alt: 'Mission Icon'
  },
  {
    title: 'Vision',
    text: 'To be the most trusted SATCOM partner worldwide, known for excellence, innovation, and commitment to customer success.',
    icon: '/rocket-icon.svg',
    alt: 'Vision Icon'
  },
  {
    title: 'Values',
    text: 'Integrity, excellence, and dedication to innovation in every project we take on — always placing clients first.',
    icon: '/star-icon.svg',
    alt: 'Values Icon'
  }
];

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2
          className={`${styles.title} ${styles.gradientText}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          TST LUXKOM
        </h2>

        <p className={styles.description}>
          European consulting firm based in Luxembourg since 2012, with origins dating back to 1998 in Germany.
          Our mission is to deliver innovative, reliable telecommunications and IT solutions that empower your
          business to thrive in today&apos; digital landscape with mission, vision and values:
        </p>

        <div className={styles.grid}>
          {aboutData.map(({ title, text, icon, alt }, idx) => (
            <article
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              key={title}
            >
              <div className={styles.cardHeader}>
                <img src={icon} alt={alt} className={styles.icon} />
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>

        <div
          className={styles.ctaContainer}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            href="#partners"
            className={styles.cta}
          >
            Trusted by leaders in global SATCOM
          </Link>
        </div>
      </div>
    </section>
  );
}