// src/components/MainContent/MainContent.jsx
import React, { useRef, useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import { FaUserAlt, FaEnvelope, FaPen } from 'react-icons/fa';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MainContent = ({ getTranslatedText }) => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serverStatus, setServerStatus] = useState(null); // null, 'online', 'offline'
    const [hasShownOfflineAlert, setHasShownOfflineAlert] = useState(false); // Para controlar la SweetAlert

    const BACKEND_URL = 'http://localhost:5000'; // URL de tu backend

    // Función para verificar el estado del servidor
    const checkServerStatus = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/`);
            if (response.ok) {
                setServerStatus('online');
                setHasShownOfflineAlert(false); // Resetea la alerta si el servidor vuelve a estar online
            } else {
                setServerStatus('offline');
            }
        } catch (error) {
            setServerStatus('offline');
        }
    };

    // useEffect para verificar el estado del servidor inicialmente y luego cada X segundos
    useEffect(() => {
        checkServerStatus(); // Primera verificación al montar

        // Configura un intervalo para verificar el estado cada 5 segundos (5000 ms)
        const interval = setInterval(() => {
            checkServerStatus();
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(interval);
    }, []); // Se ejecuta solo una vez al montar

    // useEffect para mostrar la SweetAlert cuando el servidor pasa a offline
    useEffect(() => {
        if (serverStatus === 'offline' && !hasShownOfflineAlert) {
            Swal.fire({
                icon: 'error',
                title: 'Error de Servidor!',
                text: 'En estos momentos nuestros servidores están fuera de servicio. Disculpe las molestias, inténtelo más tarde.',
                confirmButtonText: 'Entiendo',
                allowOutsideClick: false, // No se puede cerrar haciendo clic fuera
                allowEscapeKey: false,   // No se puede cerrar con la tecla Escape
            }).then(() => {
                setHasShownOfflineAlert(true); // Marca que la alerta ya se mostró
            });
        }
    }, [serverStatus, hasShownOfflineAlert]); // Depende de serverStatus y hasShownOfflineAlert

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Si el servidor está offline, no intentes enviar y notifica
        if (serverStatus === 'offline') {
            Swal.fire({
                icon: 'warning',
                title: 'Servidor Desconectado',
                text: 'No podemos enviar tu mensaje en este momento porque el servidor de correo está offline. Por favor, inténtalo de nuevo cuando el servicio se restaure.',
                confirmButtonText: 'Ok'
            });
            return; // Detiene la función
        }

        Swal.fire({
            title: 'Enviando mensaje...',
            text: 'Por favor espera',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await fetch(`${BACKEND_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje Enviado!',
                    text: 'Tu mensaje ha sido enviado con éxito. Te responderemos pronto.',
                    confirmButtonText: 'Ok'
                });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al enviar',
                    text: data.msg || 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error de Conexión',
                text: 'No se pudo conectar con el servidor. Asegúrate de que el backend esté funcionando.',
                confirmButtonText: 'Ok'
            });
        }
    };

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

                {/* Indicador de estado del servidor con nueva clase condicional */}
                <div className={`${styles.serverStatusContainer} ${serverStatus === 'online' ? styles.online : ''} ${serverStatus === 'offline' ? styles.offline : ''}`}>
                    {serverStatus === 'online' && (
                        <>
                            <FaCheckCircle className={styles.serverStatusIcon} />
                            <span className={styles.serverStatusText}>Servidor de correo: Online</span>
                        </>
                    )}
                    {serverStatus === 'offline' && (
                        <>
                            <FaTimesCircle className={styles.serverStatusIcon} />
                            <span className={styles.serverStatusText}>Servidor de correo: Offline</span>
                        </>
                    )}
                    {serverStatus === null && (
                        <span className={styles.serverStatusText}>Verificando estado del servidor...</span>
                    )}
                </div>

                <form className={styles.contactForm} ref={form} onSubmit={handleSubmit}>
                    <div className={styles.nameEmailGroup}>
                        <div className={`${styles.inputGroup} ${styles.name}`}>
                            <FaUserAlt className={styles.inputIcon} />
                            <input
                                type="text"
                                placeholder={getTranslatedText('yourName')}
                                className={styles.inputField}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.email}`}>
                            <FaEnvelope className={styles.inputIcon} />
                            <input
                                type="email"
                                placeholder={getTranslatedText('yourEmail')}
                                className={styles.inputField}
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={`${styles.inputGroup} ${styles.message}`}>
                        <FaPen className={styles.inputIcon} />
                        <textarea
                            placeholder={getTranslatedText('yourMessage')}
                            className={styles.textareaField}
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitButton}>{getTranslatedText('sendMessage')}</button>
                </form>
            </section>
        </main>
    );
};

export default MainContent;