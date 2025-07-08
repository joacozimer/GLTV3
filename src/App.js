// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin'; // Importa el nuevo componente
import './styles/colors.css';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Idioma por defecto en español
  const [language, setLanguage] = useState('es');
  // Estado para controlar qué componente se muestra: 'home' o 'employeeLogin'
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    // Sincroniza el atributo data-theme en el body también, para compatibilidad con EmployeeLogin
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Función de traducción centralizada
  const getTranslatedText = (key) => {
    const translations = {
      es: {
        // Navbar translations
        home: 'Inicio',
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto',
        community: 'Comunidad',
        darkMode: 'Modo Oscuro',
        lightMode: 'Modo Claro',
        employeeLogin: 'Soy Empleado', // Nueva traducción
        language: 'Idioma',
        settings: 'Ajustes',

        // MainContent translations
        welcomeTitle: 'Bienvenido a GreenLime Technologies',
        welcomeText: 'Tu socio de confianza para actualizaciones de microcódigo y firmware. Simplificamos tareas complejas, haciendo que la tecnología funcione sin problemas para ti.',
        learnMore: 'Saber Más',
        ourServices: 'Nuestros Servicios',
        microcodeUpdatesTitle: 'Actualizaciones de Microcódigo',
        microcodeUpdatesText: 'Manteniendo tus sistemas optimizados y seguros con el microcódigo más reciente.',
        firmwareManagementTitle: 'Gestión de Firmware',
        firmwareManagementText: 'Gestionando e implementando firmware de manera eficiente en toda tu infraestructura.',
        automatedSolutionsTitle: 'Soluciones Automatizadas',
        automatedSolutionsText: 'Automatizando tus procesos de actualización para agilidad y eficacia.',
        aboutUsTitle: 'Sobre Nosotros',
        aboutUsText: '"Green Lime Technologies" es una empresa de tecnología que brinda servicios a otras empresas del mismo rubro. Nuestro objetivo es resolver las tareas más engorrosas para las empresas de tecnología de manera ágil y efectiva. Nos dirigimos a audiencias empresariales, específicamente gerentes en empresas de tecnología, de 35 a 45 años, que son profesionales o tienen un alto nivel cultural.',
        contactUsTitle: 'Contáctanos',
        contactUsText: 'Ponte en contacto con nosotros para una solución personalizada adaptada a tus necesidades.',
        yourName: 'Tu Nombre',
        yourEmail: 'Tu Email',
        yourMessage: 'Tu Mensaje',
        sendMessage: 'Enviar Mensaje',

        // Footer translations
        allRightsReserved: 'Todos los derechos reservados.',
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',

        // EmployeeLogin translations (Nuevas)
        employeeLoginTitle: 'Acceso de Empleados',
        usernamePlaceholder: 'Nombre de Usuario',
        emailPlaceholder: 'Correo Electrónico @greenlimeth',
        passwordPlaceholder: 'Contraseña',
        loginButtonText: 'Iniciar Sesión',
        invalidEmailDomain: 'El correo debe ser del dominio @greenlimeth',
        loginSuccess: '¡Inicio de sesión exitoso!',
        toggleTheme: 'Alternar modo oscuro/claro',
      },
      en: {
        // Navbar translations
        home: 'Home',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact',
        community: 'Community',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        employeeLogin: 'Employee Login', // Nueva traducción
        language: 'Language',
        settings: 'Settings',

        // MainContent translations
        welcomeTitle: 'Welcome to GreenLime Technologies',
        welcomeText: 'Your trusted partner for microcode and firmware updates. We streamline complex tasks, making technology work seamlessly for you.',
        learnMore: 'Learn More',
        ourServices: 'Our Services',
        microcodeUpdatesTitle: 'Microcode Updates',
        microcodeUpdatesText: 'Keeping your systems optimized and secure with the latest microcode.',
        firmwareManagementTitle: 'Firmware Management',
        firmwareManagementText: 'Efficiently managing and deploying firmware across your infrastructure.',
        automatedSolutionsTitle: 'Automated Solutions',
        automatedSolutionsText: 'Automating your update processes for agility and effectiveness.',
        aboutUsTitle: 'About Us',
        aboutUsText: '"Green Lime Technologies" is a technology company that provides services to other companies in the same field. Our goal is to solve the most cumbersome tasks for technology companies in an agile and effective way. We target business audiences, specifically managers in technology companies, aged 35 to 45, who are professionals or have a high cultural level.',
        contactUsTitle: 'Contact Us',
        contactUsText: 'Reach out to us for a personalized solution tailored to your needs.',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourMessage: 'Your Message',
        sendMessage: 'Send Message',

        // Footer translations
        allRightsReserved: 'All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',

        // EmployeeLogin translations (Nuevas)
        employeeLoginTitle: 'Employee Access',
        usernamePlaceholder: 'Username',
        emailPlaceholder: 'Email @greenlimeth',
        passwordPlaceholder: 'Password',
        loginButtonText: 'Login',
        invalidEmailDomain: 'Email must be from @greenlimeth domain',
        loginSuccess: 'Login successful!',
        toggleTheme: 'Toggle Dark/Light Mode',
      }
    };
    return translations[language][key] || key;
  };

  return (
    <div className="App">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
        getTranslatedText={getTranslatedText}
        // Pasamos currentPage y setCurrentPage al Navbar para la navegación
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Renderizado condicional del contenido principal o el login */}
      {currentPage === 'home' ? (
        <MainContent
          language={language}
          getTranslatedText={getTranslatedText}
        />
      ) : (
        <EmployeeLogin
          getTranslatedText={getTranslatedText}
          isDarkMode={isDarkMode} // Pasamos el estado global del tema
          setIsDarkMode={setIsDarkMode} // Pasamos la función para cambiar el tema global
        />
      )}

      {/* El Footer se mantiene siempre visible */}
      <Footer
        language={language}
        getTranslatedText={getTranslatedText}
      />
    </div>
  );
}

export default App;