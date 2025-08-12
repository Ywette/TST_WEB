'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import nav_items from '../../data/navigation_data.json';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/tst-web-app' : '';

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerInner}>
                        {/* Logo section */}
                        <div className={styles.logoContainer}>
                            <Link href="/" className={styles.logoLink} aria-label="TST LUXKOM Home">
                                <div className={styles.logoImageWrapper}>
                                    <Image
                                        src={`${basePath}/tst-logo-v45deg.svg`}
                                        alt="TST LUXKOM Logo"
                                        priority
                                        fill
                                        className={styles.logoImage}
                                    />
                                </div>
                                <span className={styles.logoText}>TST LUXKOM</span>
                            </Link>
                        </div>

                        {/* Navigation section */}
                        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.isOpen : styles.isClosed}`}>
                            <ul className={styles.navList}>
                                {nav_items.map((item) => (
                                    <li className={styles.navItem} key={item.id}>
                                        <Link
                                            href={`#${item.navItem}`}
                                            onClick={(e) => handleNavClick(e, item.navItem)}
                                            className={styles.navLink}
                                        >
                                            {item.navItem}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className={styles.menuButton}
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="main-navigation"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

        </>
    );
}