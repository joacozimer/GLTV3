// src/components/MainContent/MainContent.jsx
import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <main className={styles.mainContent}>
            <section id="home" className={styles.section}>
                <h1 className={styles.sectionTitle}>Welcome to GreenLime Technologies</h1>
                <p className={styles.sectionText}>
                    Your trusted partner for microcode and firmware updates.
                    We streamline complex tasks, making technology work seamlessly for you.
                </p>
                <button className={styles.callToAction}>Learn More</button>
            </section>

            <section id="services" className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <div className={styles.serviceGrid}>
                    <div className={styles.serviceItem}>
                        <h3>Microcode Updates</h3>
                        <p>Keeping your systems optimized and secure with the latest microcode.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>Firmware Management</h3>
                        <p>Efficiently managing and deploying firmware across your infrastructure.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <h3>Automated Solutions</h3>
                        <p>Automating your update processes for agility and effectiveness.</p>
                    </div>
                </div>
            </section>

            <section id="about" className={styles.section}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <p className={styles.sectionText}>
                    "Green Lime Technologies" is a technology company that provides services to other companies in the same field.
                    Our goal is to solve the most cumbersome tasks for technology companies in an agile and effective way.
                    We target business audiences, specifically managers in technology companies, aged 35 to 45, who are professionals or have a high cultural level.
                </p>
            </section>

            <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <p className={styles.sectionText}>
                    Reach out to us for a personalized solution tailored to your needs.
                </p>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Your Name" className={styles.inputField} />
                    <input type="email" placeholder="Your Email" className={styles.inputField} />
                    <textarea placeholder="Your Message" className={styles.textareaField}></textarea>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </section>
        </main>
    );
};

export default MainContent;