import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import prj2 from '../assets/prj2.png';
import prj3 from '../assets/prj3.png';
import prj4 from '../assets/prj4.png';
import prj5 from '../assets/prj5.png';
import prj6 from '../assets/prj6.png'; // Ajoutez l'image pour le projet 6 ici (par exemple, capture d'écran fournie)
import { useTranslation } from 'react-i18next';

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px #FBBF24;
  }
  @media (max-width: 640px) {
    margin: 0 auto;
    max-width: 90%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const projectsData = [
  {
    key: 'air_shop',
    link: 'https://ecommerce-five-murex.vercel.app/',
    github: 'https://github.com/AYOUBERRACHIDI/ecommerce', // Remplacez par le vrai lien GitHub
    image: prj2,
  },
  {
    key: 'maghreb_event',
    link: '(à ajouter)',
    github: 'https://github.com/AYOUBERRACHIDI/eventopia-helpers', // Remplacez par le vrai lien GitHub
    image: prj3,
  },
  {
    key: 'ayber',
    link: '(à ajouter)',
    github: 'https://github.com/AYOUBERRACHIDI/gestion_projets', // Remplacez par le vrai lien GitHub
    image: prj4,
  },
  {
    key: 'casa_restaurant',
    link: '(à ajouter)',
    github: 'https://github.com/AYOUBERRACHIDI/restaurant_management', // Remplacez par le vrai lien GitHub
    image: prj5,
  },
  {
    key: 'ai_assistant',
    link: '(à ajouter)', // Ajoutez le lien du projet si disponible
    github: 'https://github.com/AYOUBERRACHIDI/IAGPT', // Remplacez par le vrai lien GitHub
    image: prj6,
  },
];

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleUnavailableLink = () => {
    toast.info(t('projects.unavailable_link'));
  };

  return (
    <section id="projets" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-primary dark:text-white"
      >
        {t('projects.title')}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.key}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -6, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-bgDark rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-divider dark:border-dividerDark glass-effect w-full"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden">
              <motion.img 
                src={project.image} 
                alt={t(`projects.${project.key}.title`)} 
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCode className="text-accent dark:text-accentDark text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                </motion.div>
              </motion.div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-heading font-semibold mb-2 text-center text-primary dark:text-white">{t(`projects.${project.key}.title`)}</h3>
              <p className="mb-2 text-center text-xs sm:text-sm md:text-base text-textSecondary dark:text-textSecondaryDark flex-grow">{t(`projects.${project.key}.description`)}</p>
              <p className="mb-3 text-center text-xs sm:text-sm md:text-base text-textSecondary dark:text-textSecondaryDark"><strong>{t('projects.tech_label', { defaultValue: 'Technologies :' })}</strong> {t(`projects.${project.key}.tech`)}</p>
            </div>
          </ProjectCard>
        ))}
      </motion.div>
      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent
            className="bg-white dark:bg-bgDark text-textPrimary dark:text-textPrimaryDark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
            >
              ×
            </button>
            <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-4 text-center text-primary dark:text-white">
              {t(`projects.${selectedProject.key}.title`)}
            </h3>
            <motion.img
              src={selectedProject.image}
              alt={t(`projects.${selectedProject.key}.title`)}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl mb-4 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="mb-4 text-center text-sm sm:text-base text-textSecondary dark:text-textSecondaryDark">
              {t(`projects.${selectedProject.key}.description`)}
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-primary dark:text-white">{t('projects.features_label')}</h4>
            <ul className="mb-4 text-sm sm:text-base text-textSecondary dark:text-textSecondaryDark list-disc pl-6">
              {t(`projects.${selectedProject.key}.features`, { returnObjects: true }).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="mb-6 text-center text-sm sm:text-base text-textSecondary dark:text-textSecondaryDark">
              <strong>{t('projects.tech_label', { defaultValue: 'Technologies :' })}</strong> {t(`projects.${selectedProject.key}.tech`)}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {selectedProject.link !== '(à ajouter)' ? (
                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#FBBF24] text-white rounded-lg hover:bg-[#D97706] transition text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t(`projects.${selectedProject.key}.view_project`)} <FaExternalLinkAlt className="ml-2" />
                </motion.a>
              ) : (
                <button
                  disabled
                  className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed text-sm sm:text-base"
                >
                  {t(`projects.${selectedProject.key}.view_project`)} (Indisponible) <FaExternalLinkAlt className="ml-2" />
                </button>
              )}
              <motion.a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-[#FBBF24] text-white rounded-lg hover:bg-[#D97706] transition text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                GitHub <FaGithub className="ml-2" />
              </motion.a>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
      <div className="section-divider mt-8 sm:mt-12 lg:mt-16" />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Projects;