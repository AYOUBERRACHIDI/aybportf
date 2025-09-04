import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaPaintBrush, FaRocket, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const pulseDotLight = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(243, 119, 8, 0.45); }
  70% { box-shadow: 0 0 0 12px rgba(243, 119, 8, 0); }
  100% { box-shadow: 0 0 0 0 rgba(243, 119, 8, 0); }
`;
const pulseDotDark = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.45); }
  70% { box-shadow: 0 0 0 12px rgba(255, 215, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
`;

const AboutContainer = styled.section`
  background: ${({ darkMode }) =>
    darkMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(249, 250, 251, 0.2)'};
  padding: 6rem 1rem;
`;

const AboutCard = styled(motion.div)`
  background: ${({ darkMode }) =>
    darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2.5rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid
    ${({ darkMode }) =>
      darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  margin-top: 1.5rem;
  padding-left: 2rem;
  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(243, 119, 8, 0.2),
      #FFD700,
      rgba(243, 119, 8, 0.2)
    );
    box-shadow: 0 0 8px rgba(243, 119, 8, 0.3);
    border-radius: 1px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding: 1.5rem 0 1.5rem 2.5rem;
`;

const Dot = styled.div`
  position: absolute;
  left: 0.95rem;
  top: 1.6rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ darkMode }) =>
    darkMode ? '#FFD700' : 'rgba(243, 119, 8, 0.18)'};
  border: 2px solid ${({ darkMode }) => (darkMode ? '#FFD700' : '#FFD700')};
  animation: ${({ darkMode }) =>
      darkMode ? pulseDotDark : pulseDotLight}
    2s ease-out infinite;
`;

const TimelineYear = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: ${({ darkMode }) => (darkMode ? '#FFD700' : '#FFD700')};
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ darkMode }) =>
    darkMode ? 'rgba(229, 229, 229, 0.9)' : 'rgba(55, 65, 81, 0.9)'};
`;

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };
  const timelineVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.25, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const education = t('about.education', { returnObjects: true });

  return (
    <AboutContainer darkMode={darkMode} id="apropos" className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary dark:text-white"
      >
        {t('about.title')}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <AboutCard
        darkMode={darkMode}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-base md:text-lg leading-relaxed text-center text-textSecondary dark:text-textSecondaryDark mb-6" dangerouslySetInnerHTML={{ __html: t('about.bio') }} />

        <ul className="list-none text-textSecondary dark:text-textSecondaryDark">
          {t('about.expertise', { returnObjects: true }).map((text, i) => (
            <ListItem
              key={i}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {i === 0 && <FaCode className="text-primary dark:text-yellow-400" />}
              {i === 1 && <FaPaintBrush className="text-primary dark:text-yellow-400" />}
              {i === 2 && <FaRocket className="text-primary dark:text-yellow-400" />}
              {text}
            </ListItem>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-10"
        >
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary dark:text-yellow-400">
            <FaBriefcase /> {t('about.professional_experience_title')}
          </h3>
          <p className="text-sm md:text-base text-textSecondary dark:text-textSecondaryDark" dangerouslySetInnerHTML={{ __html: t('about.professional_experience') }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary dark:text-yellow-400">
            <FaGraduationCap /> {t('about.education_title')}
          </h3>
          <Timeline>
            {education.map((item, i) => (
              <TimelineItem
                key={item.year}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Dot darkMode={darkMode} />
                <TimelineYear darkMode={darkMode}>{item.year}</TimelineYear>
                <TimelineText darkMode={darkMode}>{item.text}</TimelineText>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-sm md:text-base text-center italic text-gray-600 dark:text-gray-300"
        >
          {t('about.quote')}
        </motion.p>
      </AboutCard>
      <div className="section-divider mt-12" />
    </AboutContainer>
  );
};

export default About;