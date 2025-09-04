import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleButton = styled(motion.button)`
  background: ${({ darkMode }) => (darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(249, 250, 251, 0.9)')};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
  }
`;

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <ToggleButton
      darkMode={darkMode}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 rounded-full shadow-glow z-50"
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.85 }}
      title={darkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
    >
      {darkMode ? <FaSun size={20} className="text-accentDark" /> : <FaMoon size={20} className="text-accent" />}
    </ToggleButton>
  );
};

export default ThemeToggle;