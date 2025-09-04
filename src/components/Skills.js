import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { SiFlutter, SiGithubactions, SiSonarqube, SiPostman, SiJsonwebtokens, SiBootstrap } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCloud,
} from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const SkillsContainer = styled.section`
  background: ${({ darkMode }) =>
    darkMode ? "rgba(17, 24, 39, 0.2)" : "rgba(249, 250, 251, 0.2)"};
  backdrop-filter: blur(20px);
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: 4rem 0.5rem;
  }
`;

const ScrollRow = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  will-change: transform;
`;

const SkillCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 180px;
  height: 240px;
  background: ${({ darkMode }) =>
    darkMode ? "rgba(17, 24, 39, 0.2)" : "rgba(249, 250, 251, 0.2)"};
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  border: 1px solid
    ${({ darkMode }) => (darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.07);
    box-shadow: 0 0 25px ${({ hoverColor }) => hoverColor || "#fbbf24"};
    border-color: ${({ hoverColor }) => hoverColor || "#fbbf24"};
  }

  @media (max-width: 640px) {
    width: 120px;
    height: 160px;
  }
`;

const SkillIcon = styled(motion.div)`
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
  color: ${({ color }) => color || "#6b7280"};

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: ${({ darkMode }) => (darkMode ? "#e5e7eb" : "#111827")};
  margin: 0;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const skills = [
  { name: "Html", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "Css", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "Tailwind Css", icon: <FaCss3Alt />, color: "#38BDF8" },
  { name: "TypeScript", icon: <FaJsSquare />, color: "#3178C6" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "PHP", icon: <FaPhp />, color: "#8993be" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Azure", icon: <FaCloud />, color: "#0078D4" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "CI/CD", icon: <SiGithubactions />, color: "#2088FF" },
  { name: "SonarQube", icon: <SiSonarqube />, color: "#4E9BCD" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#3f3d3dff" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
];

const Skills = ({ darkMode }) => {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const scrollRowRef = useRef(null);
  const [pauseCount, setPauseCount] = useState(0);
  const paused = pauseCount > 0;
  const speed = 2;

  const loopSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    if (scrollRowRef.current) {
      const indexFlutter = skills.findIndex((s) => s.name === "Flutter");
      const cardWidth = 180 + 24; 
      x.set(-indexFlutter * cardWidth);
    }
  }, []);

  useAnimationFrame(() => {
    if (!paused && scrollRowRef.current) {
      let currentX = x.get();
      const totalWidth = scrollRowRef.current.scrollWidth / 3;
      currentX -= speed;
      if (Math.abs(currentX) >= totalWidth) {
        currentX += totalWidth;
      }
      x.set(currentX);
    }
  });

  return (
    <SkillsContainer darkMode={darkMode} id="competences">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary dark:text-white"
      >
        {t('skills.title')}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <ScrollRow
        ref={scrollRowRef}
        style={{ x }}
        role="list"
        aria-label="Liste des compétences"
      >
        {loopSkills.map((skill, i) => (
          <SkillCard
            key={i}
            darkMode={darkMode}
            hoverColor={skill.color}
            onMouseEnter={() => setPauseCount((c) => c + 1)}
            onMouseLeave={() => setPauseCount((c) => Math.max(0, c - 1))}
            tabIndex={0}
            role="listitem"
            aria-label={skill.name}
          >
            <SkillIcon
              color={skill.color}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </SkillIcon>
            <SkillName darkMode={darkMode}>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </ScrollRow>
    </SkillsContainer>
  );
};

export default Skills;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaTools, FaJsSquare, FaCss3Alt, FaPhp, FaPython, FaGitAlt, FaDocker, FaFigma, FaCloud } from 'react-icons/fa';
// import styled from 'styled-components';

// const SkillsContainer = styled.section`
//   background: ${({ darkMode }) => (darkMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(249, 250, 251, 0.2)')};
//   padding: 2rem 1rem;
//   max-width: 80rem;
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (max-width: 640px) {
//     padding: 1.5rem 0.5rem;
//   }
// `;

// const SkillsGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 1.5rem;
//   width: 100%;
//   max-width: 100%;

//   @media (max-width: 640px) {
//     grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//     gap: 1rem;
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     gap: 2rem;
//   }
// `;

// const SkillCard = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${({ darkMode }) => (darkMode ? '#111827' : '#ffffff')};
//   border: 1px solid ${({ darkMode }) => (darkMode ? '#374151' : '#e5e7eb')};
//   border-radius: 0.75rem;
//   padding: 1.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease-in-out;
//   height: 100%;
//   width: 100%;
//   box-sizing: border-box;

//   &:hover {
//     box-shadow: 0 0 20px #FBBF24;
//     transform: translateY(-4px);
//   }

//   @media (max-width: 640px) {
//     padding: 1rem;
//   }

//   @media (min-width: 1280px) {
//     padding: 2rem;
//   }
// `;

// const SkillIcon = styled.div`
//   font-size: 2.5rem;
//   margin-bottom: 1rem;

//   @media (max-width: 640px) {
//     font-size: 2rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 3rem;
//   }
// `;

// const SkillCategory = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 1rem;
//   color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#111827')};

//   @media (max-width: 640px) {
//     font-size: 1rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 1.5rem;
//   }
// `;

// const SkillList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
//   width: 100%;
// `;

// const SkillItem = styled(motion.li)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1rem;
//   color: ${({ darkMode }) => (darkMode ? '#d1d5db' : '#4b5563')};

//   @media (max-width: 640px) {
//     font-size: 0.875rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 1.125rem;
//   }

//   & > span {
//     margin-right: 0.5rem;
//     display: flex;
//     align-items: center;
//   }
// `;

// const skillsData = [
//   {
//     category: 'Frontend',
//     icon: <FaReact className="text-secondary dark:text-secondaryDark" />,
//     skills: [
//       { name: 'React.js', icon: <FaReact className="text-secondary dark:text-secondaryDark" /> },
//       { name: 'JavaScript', icon: <FaJsSquare className="text-secondary dark:text-secondaryDark" /> },
//       { name: 'HTML / CSS', icon: <FaCss3Alt className="text-secondary dark:text-secondaryDark" /> },
//       { name: 'Redux', icon: <FaReact className="text-secondary dark:text-secondaryDark" /> },
//     ],
//   },
//   {
//     category: 'Backend',
//     icon: <FaNodeJs className="text-accent dark:text-accentDark" />,
//     skills: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-accent dark:text-accentDark" /> },
//       { name: 'PHP', icon: <FaPhp className="text-accent dark:text-accentDark" /> },
//       { name: 'Laravel', icon: <FaPhp className="text-accent dark:text-accentDark" /> },
//       { name: 'Python', icon: <FaPython className="text-accent dark:text-accentDark" /> },
//     ],
//   },
//   {
//     category: 'Bases de données',
//     icon: <FaDatabase className="text-primary dark:text-primaryDark" />,
//     skills: [
//       { name: 'MySQL', icon: <FaDatabase className="text-primary dark:text-primaryDark" /> },
//       { name: 'MongoDB', icon: <FaDatabase className="text-primary dark:text-primaryDark" /> },
//       { name: 'PostgreSQL', icon: <FaDatabase className="text-primary dark:text-primaryDark" /> },
//     ],
//   },
//   {
//     category: 'Design',
//     icon: <FaPaintBrush className="text-secondary dark:text-secondaryDark" />,
//     skills: [
//       { name: 'Figma', icon: <FaFigma className="text-secondary dark:text-secondaryDark" /> },
//       { name: 'Uizard', icon: <FaPaintBrush className="text-secondary dark:text-secondaryDark" /> },
//       { name: 'Visily', icon: <FaPaintBrush className="text-secondary dark:text-secondaryDark" /> },
//     ],
//   },
//   {
//     category: 'Autres',
//     icon: <FaTools className="text-accent dark:text-accentDark" />,
//     skills: [
//       { name: 'Git / GitHub', icon: <FaGitAlt className="text-accent dark:text-accentDark" /> },
//       { name: 'Docker', icon: <FaDocker className="text-accent dark:text-accentDark" /> },
//       { name: 'Azure', icon: <FaCloud className="text-accent dark:text-accentDark" /> },
//     ],
//   },
// ];

// const Skills = ({ darkMode }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeInOut' } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//   };

//   return (
//     <SkillsContainer darkMode={darkMode} id="competences">
//       <motion.h2
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="text-3xl font-heading font-bold text-center mb-12 text-primary dark:text-white"
//       >
//         Compétences
//                 <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>

//       </motion.h2>
      
//       <SkillsGrid
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         {skillsData.map((item) => (
//           <SkillCard
//             key={item.category}
//             variants={itemVariants}
//             whileHover={{ scale: 1.03 }}
//             darkMode={darkMode}
//           >
//             <motion.div
//               className="flex justify-center"
//               whileHover={{ scale: 1.1, rotate: 360 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               <SkillIcon>{item.icon}</SkillIcon>
//             </motion.div>
//             <SkillCategory darkMode={darkMode}>{item.category}</SkillCategory>
//             <SkillList darkMode={darkMode}>
//               {item.skills.map((skill) => (
//                 <SkillItem
//                   key={skill.name}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   darkMode={darkMode}
//                 >
//                   <span>{skill.icon}</span>
//                   {skill.name}
//                 </SkillItem>
//               ))}
//             </SkillList>
//           </SkillCard>
//         ))}
//       </SkillsGrid>
//       <div className="section-divider mt-16" />
//     </SkillsContainer>
//   );
// };

// export default Skills;