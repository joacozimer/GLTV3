// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
// Import social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Recibe props de App.js
const Footer = ({ getTranslatedText }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} GreenLime Technologies. {getTranslatedText('allRightsReserved')}</p>
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <FaFacebookF className={styles.socialIcon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <FaInstagram className={styles.socialIcon} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <FaTwitter className={styles.socialIcon} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <FaYoutube className={styles.socialIcon} />
                    </a>
                </div>
                <div className={styles.footerLinks}>
                    <a href="#privacy" className={styles.footerLink}>{getTranslatedText('privacyPolicy')}</a>
                    <a href="#terms" className={styles.footerLink}>{getTranslatedText('termsOfService')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;