// src/components/EmployeeLogin/EmployeeLogin.jsx
import React, { useState, useEffect } from 'react';
import styles from './EmployeeLogin.module.css';
import { FaUserAlt, FaEnvelope, FaLock, FaSun, FaMoon } from 'react-icons/fa'; // Solo los iconos necesarios

// Importa las imágenes del logo
import lightModeLogo from '../../assets/images/GreenLimeWhiteBackground.jpg';
import darkModeLogo from '../../assets/images/GreenLimeGreyBackground.jpg';

// Recibe props de App.js, incluyendo isDarkMode y setIsDarkMode
const EmployeeLogin = ({ getTranslatedText, isDarkMode, setIsDarkMode }) => {
    // Estados para los campos del formulario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Estado para controlar el inicio de la animación
    const [animationStarted, setAnimationStarted] = useState(false);

    // Efecto para iniciar la animación una vez que el componente se monta
    useEffect(() => {
        // Medio segundo (500ms) antes de que la animación de achique y movimiento empiece
        const timer = setTimeout(() => {
            setAnimationStarted(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (email && !email.endsWith('@greenlimeth')) {
            setErrorMessage(getTranslatedText('invalidEmailDomain'));
            return;
        }

        // Aquí iría tu lógica de autenticación real
        if (username === 'test' && password === 'password') {
            setSuccessMessage(getTranslatedText('loginSuccess'));
            console.log('Login exitoso!');
        } else {
            setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Llama a la función de App.js
    };

    // Determina qué logo mostrar basado en el tema actual
    const currentLogo = isDarkMode ? darkModeLogo : lightModeLogo;

    return (
        <div className={styles.loginContainer}>
            {/* Botón de alternar tema (este es el único que debe existir y está en la esquina superior derecha) */}

            {/* Contenedor principal del contenido que se anima (logo y formulario) */}
            <div className={`${styles.mainContentArea} ${animationStarted ? styles.animateContent : ''}`}>

                {/* Contenedor del logo */}
                <div className={styles.logoWrapper}>
                    <img
                        src={currentLogo}
                        alt="GreenLime Technologies Logo"
                        className={styles.companyLogo}
                    />
                </div>

                {/* Formulario de login */}
                <form className={styles.loginForm} onSubmit={handleLogin}>
                    <h2 className={styles.loginTitle}>{getTranslatedText('employeeLoginTitle')}</h2>

                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

                    <div className={styles.inputGroup}>
                        <FaUserAlt className={styles.inputIcon} />
                        <input
                            type="text"
                            placeholder={getTranslatedText('usernamePlaceholder')}
                            className={styles.inputField}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input
                            type="email"
                            placeholder={getTranslatedText('emailPlaceholder')}
                            className={styles.inputField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type="password"
                            placeholder={getTranslatedText('passwordPlaceholder')}
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.loginButton}>
                        {getTranslatedText('loginButtonText')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLogin;