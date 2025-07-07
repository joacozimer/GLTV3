// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import whiteLogo from '../../assets/images/GreenLimeWhiteBackground.jpg';
import greyLogo from '../../assets/images/GreenLimeGreyBackground.jpg';

// Import icons
import { FaHome, FaConciergeBell, FaInfoCircle, FaEnvelope, FaUsers, FaCog, FaMoon, FaSun, FaGlobe, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [language, setLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSettingsOpen(false); // Close settings if opening main menu
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
        setIsMenuOpen(false); // Close main menu if opening settings
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
        // In a real app, you'd likely use a context or i18n library to change content
    };

    const getTranslatedText = (key) => {
        const translations = {
            es: {
                home: 'Inicio',
                services: 'Servicios',
                about: 'Nosotros',
                contact: 'Contacto',
                community: 'Comunidad',
                darkMode: 'Modo Oscuro',
                lightMode: 'Modo Claro',
                employeeLogin: 'Soy Empleado',
                language: 'Idioma',
                settings: 'Ajustes'
            },
            en: {
                home: 'Home',
                services: 'Services',
                about: 'About Us',
                contact: 'Contact',
                community: 'Community',
                darkMode: 'Dark Mode',
                lightMode: 'Light Mode',
                employeeLogin: 'Employee Login',
                language: 'Language',
                settings: 'Settings'
            }
        };
        return translations[language][key] || key;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <img
                        src={isDarkMode ? greyLogo : whiteLogo}
                        alt="GreenLime Technologies Logo"
                        className={styles.logo}
                    />
                </div>

                <div className={styles.navLinks}>
                    <a href="#home" className={styles.navLink}><FaHome className={styles.navIcon} /> {getTranslatedText('home')}</a>
                    <a href="#services" className={styles.navLink}><FaConciergeBell className={styles.navIcon} /> {getTranslatedText('services')}</a>
                    <a href="#about" className={styles.navLink}><FaInfoCircle className={styles.navIcon} /> {getTranslatedText('about')}</a>
                    <a href="#community" className={styles.navLink}><FaUsers className={styles.navIcon} /> {getTranslatedText('community')}</a> {/* New Community button */}
                    <a href="#contact" className={styles.navLink}><FaEnvelope className={styles.navIcon} /> {getTranslatedText('contact')}</a>
                </div>

                <div className={styles.rightSection}>
                    {/* Settings/Gear Icon */}
                    <div className={styles.settingsToggle} onClick={toggleSettings}>
                        <FaCog className={styles.cogIcon} />
                        <div className={`${styles.settingsDropdown} ${isSettingsOpen ? styles.open : ''}`}>
                            <button onClick={toggleDarkMode} className={styles.dropdownButton}>
                                {isDarkMode ? <FaSun className={styles.buttonIcon} /> : <FaMoon className={styles.buttonIcon} />}
                                {getTranslatedText(isDarkMode ? 'lightMode' : 'darkMode')}
                            </button>
                            <button className={styles.dropdownButton}>
                                <FaUser className={styles.buttonIcon} />
                                {getTranslatedText('employeeLogin')}
                            </button>
                            <button onClick={toggleLanguage} className={styles.dropdownButton}>
                                <FaGlobe className={styles.buttonIcon} />
                                {getTranslatedText('language')} ({language === 'es' ? 'English' : 'Español'})
                            </button>
                        </div>
                    </div>

                    {/* Sandwich Menu for smaller screens */}
                    <div className={styles.sandwichMenu} onClick={toggleMenu}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>

                    <div className={`${styles.dropdownMenu} ${isMenuOpen ? styles.open : ''}`}>
                        <a href="#home" className={styles.dropdownLink} onClick={toggleMenu}><FaHome className={styles.navIcon} /> {getTranslatedText('home')}</a>
                        <a href="#services" className={styles.dropdownLink} onClick={toggleMenu}><FaConciergeBell className={styles.navIcon} /> {getTranslatedText('services')}</a>
                        <a href="#about" className={styles.dropdownLink} onClick={toggleMenu}><FaInfoCircle className={styles.navIcon} /> {getTranslatedText('about')}</a>
                        <a href="#community" className={styles.dropdownLink} onClick={toggleMenu}><FaUsers className={styles.navIcon} /> {getTranslatedText('community')}</a>
                        <a href="#contact" className={styles.dropdownLink} onClick={toggleMenu}><FaEnvelope className={styles.navIcon} /> {getTranslatedText('contact')}</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;