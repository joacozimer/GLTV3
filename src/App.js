// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';
import './styles/colors.css';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const getTranslatedText = (key) => {
    const translations = {
      es: {
        home: 'Inicio',
        services: 'Nuestros Servicios',
        about: 'Acerca de Nosotros',
        contact: 'Contacto',
        community: 'Comunidad',
        darkMode: 'Modo Oscuro',
        lightMode: 'Modo Claro',
        employeeLogin: 'Acceso Empleados',
        language: 'Idioma',
        settings: 'Configuración',

        welcomeTitle: 'Bienvenidos a Green Lime Technologies',
        welcomeText: 'Somos su socio de confianza para actualizaciones de microcódigo y firmware. Simplificamos tareas complejas, asegurando que la tecnología funcione sin inconvenientes para ustedes.',
        learnMore: 'Conocer Más',
        ourServices: 'Nuestros Servicios',
        microcodeUpdatesTitle: 'Actualizaciones de Microcódigo',
        microcodeUpdatesText: 'Mantenemos sus sistemas optimizados y seguros con el microcódigo más reciente.',
        firmwareManagementTitle: 'Gestión de Firmware',
        firmwareManagementText: 'Gestionamos e implementamos firmware de manera eficiente en toda su infraestructura.',
        automatedSolutionsTitle: 'Soluciones Automatizadas',
        automatedSolutionsText: 'Automatizamos sus procesos de actualización para mayor agilidad y eficacia.',
        aboutUsTitle: 'Sobre Nosotros',
        aboutUsText: '"Green Lime Technologies" es una empresa de tecnología que brinda servicios a otras empresas del mismo rubro. Nuestro objetivo es resolver las tareas más complejas para las empresas de tecnología de manera ágil y efectiva. Nos dirigimos a audiencias empresariales, específicamente a gerentes en empresas de tecnología, de 35 a 45 años, que son profesionales o poseen un alto nivel cultural.',
        contactUsTitle: 'Contáctenos',
        contactUsText: 'Sírvase ponerse en contacto con nosotros para una solución personalizada y adaptada a sus necesidades.',
        yourName: 'Su Nombre',
        yourEmail: 'Su Correo Electrónico',
        yourMessage: 'Su Mensaje',
        sendMessage: 'Enviar Mensaje',

        allRightsReserved: 'Todos los derechos reservados.',
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',

        employeeLoginTitle: 'Acceso de Empleados',
        usernamePlaceholder: 'Nombre de Usuario',
        emailPlaceholder: 'Correo Electrónico @greenlimeth',
        passwordPlaceholder: 'Contraseña',
        loginButtonText: 'Iniciar Sesión',
        invalidEmailDomain: 'El correo electrónico debe ser del dominio @greenlimeth',
        loginSuccess: '¡Inicio de sesión exitoso!',
        toggleTheme: 'Alternar modo oscuro/claro',
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
        settings: 'Settings',

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

        allRightsReserved: 'All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === 'home' ? (
        <MainContent
          language={language}
          getTranslatedText={getTranslatedText}
        />
      ) : (
        <EmployeeLogin
          getTranslatedText={getTranslatedText}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      )}

      <Footer
        language={language}
        getTranslatedText={getTranslatedText}
      />
    </div>
  );
}

export default App;