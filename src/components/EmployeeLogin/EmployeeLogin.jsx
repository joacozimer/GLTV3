// src/components/EmployeeLogin/EmployeeLogin.jsx
import React, { useState, useEffect } from 'react';
import styles from './EmployeeLogin.module.css';
import { FaUserAlt, FaEnvelope, FaLock, FaSun, FaMoon } from 'react-icons/fa';

// Importa las imágenes del logo (¡Asegúrate de que estas rutas sean correctas y que los archivos existan!)
import lightModeLogo from '../../assets/images/GreenLimeWhiteBackground.jpg';
import darkModeLogo from '../../assets/images/GreenLimeGreyBackground.jpg'; // Asumiendo este nombre para la versión gris

const EmployeeLogin = ({ getTranslatedText }) => {
    // Estado local para el tema (claro/oscuro). En una aplicación real, esto vendría de un contexto global.
    const [currentTheme, setCurrentTheme] = useState('light'); // 'light' o 'dark'

    // Estados para los campos del formulario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Efecto para inicializar el tema desde el atributo data-theme del body
    useEffect(() => {
        const bodyTheme = document.body.getAttribute('data-theme');
        if (bodyTheme) {
            setCurrentTheme(bodyTheme);
        }
    }, []);

    // Función para alternar el tema y actualizar el atributo data-theme en el body
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Limpiar mensajes anteriores
        setSuccessMessage('');

        // Validar el correo electrónico
        if (!email.endsWith('@greenlimeth')) {
            setErrorMessage(getTranslatedText('invalidEmailDomain')); // Por ejemplo: "El correo debe ser @greenlimeth"
            return;
        }

        // Aquí iría la lógica real de autenticación (ej. llamada a una API)
        console.log('Intentando login con:', { username, email, password });

        // Simulación de login exitoso
        setSuccessMessage(getTranslatedText('loginSuccess')); // Por ejemplo: "Inicio de sesión exitoso!"
        // Limpiar formulario
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.themeToggle}>
                <button onClick={toggleTheme} aria-label={getTranslatedText('toggleTheme')}>
                    {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            <div className={styles.logoWrapper}>
                {/* Logo condicional según el tema */}
                <img
                    src={currentTheme === 'light' ? lightModeLogo : darkModeLogo}
                    alt="GreenLime Technologies Logo"
                    className={styles.companyLogo}
                />
            </div>

            <h2 className={styles.loginTitle}>{getTranslatedText('employeeLoginTitle')}</h2>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
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
    );
};

export default EmployeeLogin;