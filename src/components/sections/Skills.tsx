import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaJava
} from 'react-icons/fa';
import { 
  SiJavascript,
  SiMongodb,
  SiMysql
} from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    .skill-icon {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const SkillIcon = styled.span`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${theme.colors.accent};
  transition: all ${theme.transitions.default};
`;

const SkillPercentage = styled.span`
  font-size: 0.85rem;
  color: ${theme.colors.accent};
  font-weight: 600;
  min-width: 35px;
  text-align: right;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: ${theme.colors.glass.background};
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.light});
  border-radius: 2px;
  width: ${props => props.level}%;
`;

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'React', icon: <FaReact />, level: 45 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 75 },
      {name: 'CSS', icon: <FaCss3Alt/>, level: 55 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 70 },

      
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 60 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 55 },
      { name: 'MySQL', icon: <SiMysql />, level: 75 },
      { name: 'JAVA', icon: <FaJava />, level: 80 },
    ],
  },
  {
    title: 'DevOps',
    icon: <FaGitAlt />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 80 },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Habilidades y Tecnologías
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex} 
                    variants={itemVariants}
                    role="listitem"
                  >
                    <SkillHeader>
                      <SkillInfo>
                        <SkillIcon className="skill-icon" aria-hidden="true">
                          {skill.icon}
                        </SkillIcon>
                        <span>{skill.name}</span>
                      </SkillInfo>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <ProgressBarContainer>
                      <ProgressBar 
                        level={skill.level}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </ProgressBarContainer>
                    <span className="sr-only">{`${skill.name} - ${skill.level}% proficiency in ${category.title}`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
