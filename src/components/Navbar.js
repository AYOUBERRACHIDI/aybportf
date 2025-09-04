import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const NavContainer = styled.nav`
  background: ${({ darkMode }) =>
    darkMode ? "rgba(17, 24, 39, 0.9)" : "rgba(249, 250, 251, 0.9)"};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid
    ${({ darkMode }) => (darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
`;

const NavLink = styled(motion.li)`
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ darkMode }) => (darkMode ? "#E5E7EB" : "#374151")};
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ darkMode }) =>
      darkMode ? "#FCD34D" : "#FBBF24"};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
  }
`;

const MobileMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ darkMode }) =>
    darkMode ? "rgba(17, 24, 39, 0.98)" : "rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(16px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  li {
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
    }
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
    background: transparent;
    color: ${({ darkMode }) => (darkMode ? "#E5E7EB" : "#374151")};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
      color: #111827;
    }

    &.active {
      background: ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
      color: #111827;
    }
  }
`;

const Navbar = ({ darkMode }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('navbar.home'), to: "accueil" },
    { name: t('navbar.about'), to: "apropos" },
    { name: t('navbar.skills'), to: "competences" },
    { name: t('navbar.projects'), to: "projets" },
    { name: t('navbar.contact'), to: "contact" },
  ];

  const changeLanguage = (lng) => {
  localStorage.setItem('i18nextLng', lng);
  window.location.reload(); 
};


  return (
    <NavContainer darkMode={darkMode}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl lg:text-3xl font-extrabold cursor-pointer"
        >
          <span className="text-primary dark:text-white">AYBER</span>
          <span className="text-yellow-400 dark:text-yellow-300">.</span>
          <span className="text-primary dark:text-white">DEV</span>
        </motion.h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="text-accent dark:text-accentDark" />
            ) : (
              <FaBars className="text-accent dark:text-accentDark" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex md:space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              darkMode={darkMode}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ScrollLink to={link.to} smooth duration={500} offset={-80}>
                {link.name}
              </ScrollLink>
            </NavLink>
          ))}

          <LanguageSwitcher darkMode={darkMode} className="ml-4">
            <button
              className={i18n.language === "fr" ? "active" : ""}
              onClick={() => changeLanguage("fr")}
            >
              FR
            </button>
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </LanguageSwitcher>
        </ul>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              darkMode={darkMode}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </motion.li>
              ))}

              <motion.li>
                <LanguageSwitcher darkMode={darkMode}>
                  <button
                    className={i18n.language === "fr" ? "active" : ""}
                    onClick={() => changeLanguage("fr")}
                  >
                    FR
                  </button>
                  <button
                    className={i18n.language === "en" ? "active" : ""}
                    onClick={() => changeLanguage("en")}
                  >
                    EN
                  </button>
                </LanguageSwitcher>
              </motion.li>
            </MobileMenu>
          )}
        </AnimatePresence>
      </div>
    </NavContainer>
  );
};

export default Navbar;