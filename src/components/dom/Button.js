// components/ui/Button.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Button.module.css';


/**
 * Button Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content inside the button
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {'primary'|'secondary'|'outline'} [props.variant='primary'] - Button style variant
 * @returns {JSX.Element}
 */
const Button = ({ 
    children, 
    className = '', 
    variant = 'primary',
    ...props 
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            <span className="btn-content">{children}</span>
        </button>
    );
};

export default Button;