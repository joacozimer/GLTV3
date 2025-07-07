// src/components/Navbar/Navbar.jsx
import React from 'react'; // No need for useState, useEffect locally anymore
import styles from './Navbar.module.css';
import whiteLogo from '../../assets/images/GreenLimeWhiteBackground.jpg';
import greyLogo from '../../assets/images/GreenLimeGreyBackground.jpg';

// Import icons
import { FaHome, FaConciergeBell, FaInfoCircle, FaEnvelope, FaUsers, FaCog, FaMoon, FaSun, FaGlobe, FaUser } from 'react-icons/fa';

// Recibe props de App.js
const Navbar = ({ isDarkMode, setIsDarkMode, language, setLanguage, getTranslatedText }) => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Keep local state for menu
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false); // Keep local state for settings

    // useEffect para el modo oscuro se mantiene aquí si solo afecta a este componente,
    // pero ya está centralizado en App.js para el 'data-theme' del documento.
    // Si el Navbar necesita reaccionar de forma específica, se puede mantener.
    // En este caso, isDarkMode ya viene como prop, así que no es necesario un useEffect aquí.

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Llama a la función de App.js
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
        setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es')); // Llama a la función de App.js
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
                    <a href="#community" className={styles.navLink}><FaUsers className={styles.navIcon} /> {getTranslatedText('community')}</a>
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