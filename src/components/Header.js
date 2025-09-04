import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile.png";
import ParticlesBackground from "./ParticlesBackground";
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled.section`
  min-height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 1rem;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  border: 3px solid ${({ darkMode }) => (darkMode ? "#FCD34D" : "#FBBF24")};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
`;

const TitleText = styled(motion.h1)`
  font-size: 2.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  background: ${({ darkMode, primary }) =>
    primary ? (darkMode ? "#FCD34D" : "#FBBF24") : (darkMode ? "#6B7280" : "#4B5563")};
  color: ${({ darkMode, primary }) =>
    primary ? "#1F2937" : "#FFFFFF"};

  &:hover {
    transform: translateY(-3px) scale(1.02);
  }
`;

const Header = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer id="accueil" darkMode={darkMode}>
      <ParticlesBackground darkMode={darkMode} />

      <motion.div
        className="text-center max-w-4xl bg-white/10 dark:bg-black/10 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-divider dark:border-dividerDark"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div>
          <ProfileImage
            src={profileImage}
            alt="Ayoub Errachidi"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        <TitleText className="font-heading font-extrabold mb-2 tracking-wide text-primary dark:text-white">
          {t('header.name')}
        </TitleText>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-accent dark:text-accentDark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              ...t('header.typing_sequences', { returnObjects: true }).flatMap(seq => [seq, 2000])
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed text-textSecondary dark:text-textSecondaryDark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t('header.description')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex items-center justify-center">
            <FaEnvelope className="mr-2 text-accent dark:text-accentDark" /> 
            {t('header.email')}
          </p>
          <p className="flex items-center justify-center">
            <FaPhone className="mr-2 text-accent dark:text-accentDark" /> 
            {t('header.phone')}
          </p>
          <p className="flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2 text-accent dark:text-accentDark" /> 
            {t('header.location')}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            href="/cvcv.pdf"
            download
            darkMode={darkMode}
            primary
            className="inline-flex items-center"
          >
            <FaDownload className="mr-2" /> {t('header.download_cv')}
          </Button>
          <Button
            as={ScrollLink}
            to="contact"
            smooth
            duration={500}
            offset={-80}
            darkMode={darkMode}
            className="inline-flex items-center cursor-pointer"
          >
            {t('header.contact_me')} <FaArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;