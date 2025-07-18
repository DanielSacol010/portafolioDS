import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { lazy, Suspense } from 'react';
const FaDownload = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaDownload })));
const FaGraduationCap = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGraduationCap })));

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 1.5);
  }
`;

const EducationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const EducationList = styled(motion.div)`
  /* Animation handled by framer-motion */
`;

const EducationItem = styled.div`
  background: ${theme.colors.glass.card};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.glass.border};
  transition: all ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(246, 177, 122, 0.2);
    border-color: ${theme.colors.primary}66;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

const IconWrapper = styled.div`
  color: ${theme.colors.light};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary}22;
  border-radius: 50%;
`;

const EducationTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const EducationInstitution = styled.p`
  color: ${theme.colors.textLight};
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`;

const EducationDate = styled.span`
  color: ${theme.colors.textLight};
  font-size: 0.875rem;
  opacity: 0.8;
`;

const EducationDescription = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: ${theme.spacing.sm};
  margin-bottom: 0;
`;

const CVSection = styled(motion.div)`
  /* Animation handled by framer-motion */
  background: ${theme.colors.glass.card};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.glass.border};
  text-align: center;
  height: fit-content;
  max-width: 350px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    position: sticky;
    top: ${theme.spacing.lg};
    max-width: none;
  }
`;

const CVTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
`;

const CVDescription = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.9;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: ${theme.colors.textDark};
  text-decoration: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all ${theme.transitions.default};
  box-shadow: 0 4px 15px rgba(246, 177, 122, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(246, 177, 122, 0.4);
    background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.primary});
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const Education = () => {
  return (
    <EducationSection id="education" role="region" aria-label="Education and CV">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Educación y Formación
      </SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <EducationContent>
          <EducationList
            variants={itemVariants}
          >
            <EducationItem>
              <EducationHeader>
                <IconWrapper>
                  <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                    <FaGraduationCap aria-hidden="true" />
                  </Suspense>
                </IconWrapper>
                <div>
                  <EducationTitle>Périto en Computación</EducationTitle>
                  <EducationInstitution>Centro Educativo Técnico Laboral Kinal</EducationInstitution>
                </div>
              </EducationHeader>
              <EducationDate>2023 - 2025</EducationDate>
              <EducationDescription>
                Formación integral en desarrollo de software, estructuras de datos, 
                algoritmos y metodologías de desarrollo ágiles.
              </EducationDescription>
            </EducationItem>

            
          </EducationList>

          <CVSection
            variants={itemVariants}
          >
            <CVTitle>
              <Suspense fallback={<div style={{ width: '1.5rem', height: '1.5rem' }} />}>
                <FaDownload aria-hidden="true" />
              </Suspense>
              Curriculum Vitae
            </CVTitle>
            <CVDescription>
              Descarga mi CV completo para obtener información detallada sobre 
              mí.
            </CVDescription>
            <DownloadButton 
              href="./assets/cv_Daniel_Sacol.pdf" 
              download="CV-Daniel-Sacol.pdf"
              aria-label="Descargar Curriculum Vitae en formato PDF"
            >
              <Suspense fallback={<div style={{ width: '1rem', height: '1rem' }} />}>
                <FaDownload aria-hidden="true" />
              </Suspense>
              Descargar CV
            </DownloadButton>
          </CVSection>
        </EducationContent>
      </motion.div>
    </EducationSection>
  );
};

export default Education;
