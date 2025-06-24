'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import partners from '../../data/partners_data.json';
import styles from '../styles/Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partners_wrapper} id="partners">
      <div className={styles.partners_container}>
        <h2 className={styles.section_title}>Our Partners</h2>

        <div className={styles.marquee}>
          <div className={styles.marquee_content1}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <Link
                key={`${partner.key}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partner_item}
              >
                <div className={styles.partner_image_container}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={120}
                    className={styles.partner_image}
                    unoptimized
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marquee_content2}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <Link
                key={`reverse-${partner.key}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partner_item}
              >
                <div className={styles.partner_image_container}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={120}
                    className={styles.partner_image}
                    unoptimized
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
