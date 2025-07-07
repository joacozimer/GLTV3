// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} GreenLime Technologies. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
                    <a href="#terms" className={styles.footerLink}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;