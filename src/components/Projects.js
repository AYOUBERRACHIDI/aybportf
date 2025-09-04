import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import prj2 from '../assets/prj2.png';
import prj3 from '../assets/prj3.png';
import prj4 from '../assets/prj4.png';
import prj5 from '../assets/prj5.png';
import { useTranslation } from 'react-i18next';

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px #FBBF24;
  }
  @media (max-width: 640px) {
    margin: 0 auto;
    max-width: 90%;
  }
`;

const projectsData = [
  {
    key: 'air_shop',
    link: 'https://ecommerce-five-murex.vercel.app/',
    image: prj2,
  },
  {
    key: 'maghreb_event',
    link: '(à ajouter)',
    image: prj3,
  },
  {
    key: 'ayber',
    link: '(à ajouter)',
    image: prj4,
  },
  {
    key: 'casa_restaurant',
    link: '(à ajouter)',
    image: prj5,
  },
];

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();

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
              {project.link !== '(à ajouter)' ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-[#FBBF24] hover:text-[#D97706] dark:text-[#FBBF24] dark:hover:text-[#D97706] transition text-xs sm:text-sm md:text-base mt-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t(`projects.${project.key}.view_project`)} <FaExternalLinkAlt className="ml-1 sm:ml-2" />
                </motion.a>
              ) : (
                <motion.button
                  onClick={handleUnavailableLink}
                  className="flex justify-center items-center text-[#FBBF24] hover:text-[#D97706] dark:text-[#FBBF24] dark:hover:text-[#D97706] transition text-xs sm:text-sm md:text-base mt-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t(`projects.${project.key}.view_project`)} <FaExternalLinkAlt className="ml-1 sm:ml-2" />
                </motion.button>
              )}
            </div>
          </ProjectCard>
        ))}
      </motion.div>
      <div className="section-divider mt-8 sm:mt-12 lg:mt-16" />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Projects;
