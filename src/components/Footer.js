import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram, FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background: ${({ darkMode }) => (darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(249, 250, 251, 0.9)')};
  backdrop-filter: blur(12px);
  padding: 2rem 1rem;
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;      
  bottom: 2rem;         
  left: 2rem;            
  z-index: 50;
  background: ${({ darkMode }) => (darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(249, 250, 251, 0.9)')};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  padding: 0.75rem;      
  border-radius: 50%;   
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
    transform: translateY(-2px);
  }
`;

const Footer = ({ darkMode }) => {
  const { t } = useTranslation();
  const iconVariants = {
    hover: { scale: 1.3, rotate: 10, transition: { duration: 0.3 } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer darkMode={darkMode} className="text-center glass-effect">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 text-primary dark:text-white"
      >
        {t('footer.connect')}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
        <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            href="https://github.com/AYOUBERRACHIDI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl transition"
          >
            <FaGithub className="hover:text-gray-800 dark:hover:text-gray-300" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            href="https://linkedin.com/in/ayoub-errachidi-b86853309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl transition"
          >
            <FaLinkedin className="hover:text-blue-700 dark:hover:text-blue-400" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            href="https://twitter.com/ayouberrachidi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl transition"
          >
            <FaTwitter className="hover:text-blue-400 dark:hover:text-blue-200" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            href="https://wa.me/+212637056366"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl transition"
          >
            <FaWhatsapp className="hover:text-green-500 dark:hover:text-green-300" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            href="https://instagram.com/errachidiayoub_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl transition"
          >
            <FaInstagram className="hover:text-pink-700 dark:hover:text-pink-400" />
          </motion.a>
        </div>
        <ScrollToTopButton
          darkMode={darkMode}
          onClick={scrollToTop}
          className="mt-4 sm:mt-0 sm:ml-4 p-2 sm:p-3 rounded-full shadow-glow text-accent dark:text-accentDark"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Retour en haut"
        >
          <FaArrowUp size={18} />
        </ScrollToTopButton>
      </div>
      <p className="text-xs sm:text-sm text-textSecondary dark:text-textSecondaryDark">{t('footer.copyright')}</p>
    </FooterContainer>
  );
};

export default Footer;