import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaGraduationCap, FaUser, FaEnvelope } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const InfoCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  border-radius: 8px;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.glass.card};
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
    color: ${theme.colors.accent};
    min-width: 20px;
  }

  span {
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.5;
  }
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const personalInfo = [
    { icon: <FaUser />, label: "Nombre", value: "Daniel Sacol" },
    { icon: <FaCalendarAlt />, label: "Edad", value: "18 años" },
    { icon: <FaMapMarkerAlt />, label: "Ubicación", value: "San José Pinula, Guatemala" },
    { icon: <FaEnvelope />, label: "Email", value: "danieledusc@gmail.com" },
    { icon: <FaCode />, label: "Habilidades", value: "Trabajo en equipo, Comunicación efectiva, Resolución de problemas, Adaptabilidad, Liderazgo" },
    { icon: <FaGraduationCap />, label: "Formación", value: "Actualmente estudiando e interesado en la Ingeniería en Computación" },
  ];

  return (
    <AboutSection id="about" role="region" aria-label="Acerca de mí">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Acerca de Mí
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutContainer>
            <InfoCard variants={itemVariants}>
              <CardTitle>
                <FaUser />
                Información Personal
              </CardTitle>
              <InfoGrid>
                {personalInfo.map((info, index) => (
                  <InfoItem key={index}>
                    {info.icon}
                    <span>
                      <strong>{info.label}:</strong> {info.value}
                    </span>
                  </InfoItem>
                ))}
              </InfoGrid>
            </InfoCard>
          </AboutContainer>
        </motion.div>
      </div>
    </AboutSection>
  );
};

export default About;
