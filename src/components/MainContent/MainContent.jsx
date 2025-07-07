// src/components/MainContent/MainContent.jsx
import React from 'react';
import styles from './MainContent.module.css';
// Import new icons for the form
import { FaUserAlt, FaEnvelope, FaPen } from 'react-icons/fa';


// Recibe props de App.js
const MainContent = ({ getTranslatedText }) => {
    return (
        <main className={styles.mainContent}>
            <section id="home" className={styles.section}>
                <h1 className={styles.sectionTitle}>{getTranslatedText('welcomeTitle')}</h1>
                <p className={styles.sectionText}>
                    {getTranslatedText('welcomeText')}
                </p>
                <button className={styles.callToAction}>{getTranslatedText('learnMore')}</button>
            </section>

            <section id="services" className={styles.section}>
                <h2 className={styles.sectionTitle}>{getTranslatedText('ourServices')}</h2>
                <div className={styles.serviceGrid}>
                    <div className={styles.serviceItem}>
                        <h3>{getTranslatedText('microcodeUpdatesTitle')}</h3>
                        <p>{getTranslatedText('microcodeUpdatesText')}</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>{getTranslatedText('firmwareManagementTitle')}</h3>
                        <p>{getTranslatedText('firmwareManagementText')}</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>{getTranslatedText('automatedSolutionsTitle')}</h3>
                        <p>{getTranslatedText('automatedSolutionsText')}</p>
                    </div>
                </div>
            </section>

            <section id="about" className={styles.section}>
                <h2 className={styles.sectionTitle}>{getTranslatedText('aboutUsTitle')}</h2>
                <p className={styles.sectionText}>
                    {getTranslatedText('aboutUsText')}
                </p>
            </section>

            <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>{getTranslatedText('contactUsTitle')}</h2>
                <p className={styles.sectionText}>
                    {getTranslatedText('contactUsText')}
                </p>
                <form className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <FaUserAlt className={styles.inputIcon} />
                        <input type="text" placeholder={getTranslatedText('yourName')} className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input type="email" placeholder={getTranslatedText('yourEmail')} className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup}>
                        <FaPen className={styles.inputIcon} />
                        <textarea placeholder={getTranslatedText('yourMessage')} className={styles.textareaField}></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>{getTranslatedText('sendMessage')}</button>
                </form>
            </section>
        </main>
    );
};

export default MainContent;