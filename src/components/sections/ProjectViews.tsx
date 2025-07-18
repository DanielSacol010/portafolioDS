import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

const ProjectViewsSection = styled.section`
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

const ViewsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: ${theme.spacing.lg};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 70vh;
    min-height: 500px;
  }
`;

const MainImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  transition: transform ${theme.transitions.default};
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: ${theme.spacing.lg};
  color: ${theme.colors.light};
`;

const ProjectInfo = styled.div`
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: ${theme.spacing.sm};
    font-weight: 600;
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${theme.spacing.md};
  pointer-events: none;

  button {
    background: ${theme.colors.glass.background};
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: ${theme.colors.light};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ${theme.transitions.default};
    pointer-events: auto;
    font-size: 1.2rem;

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.textDark};
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }
`;

const ExpandButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.light};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  font-size: 1rem;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.textDark};
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

const ProjectIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.colors.textLight};
    opacity: 0.3;
    transition: all ${theme.transitions.default};
    cursor: pointer;

    &.active {
      opacity: 1;
      background: ${theme.colors.accent};
      transform: scale(1.2);
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Modal = styled(motion.div)<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: ${theme.spacing.lg};

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
  }

  button {
    position: absolute;
    top: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    background: ${theme.colors.glass.background};
    backdrop-filter: blur(8px);
    border: none;
    color: ${theme.colors.light};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all ${theme.transitions.default};

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.textDark};
    }
  }
`;

const projectViews = [
  {
    id: 1,
    title: "Bamguate",
    description: "Aplicacion de banca en linea",
    image: "./projectImages/Bamguate.png"
  },
  {
    id: 2,
    title: "LocalHotel",
    description: "Aplicacion para reservas de hoteles tipo Trivago",
    image: "./projectImages/LocalHotel.png"
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Blog para realizar publicaciones y comentarios",
    image: "./projectImages/Blog.png"
  },
  {
    id: 4,
    title: "Calculadora",
    description: "Aplicacion de calculadora básica",
    image: "./projectImages/Calculadora.jpg"
  },
  {
    id: 5,
    title: "Kinal Market",
    description: "Aplicacione de gestion de supermercado y reportería",
    image: "./projectImages/KinalMarket.jpg"
  }
];

const ProjectViews = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handlePrevProject = () => {
    setCurrentProject(prev => prev === 0 ? projectViews.length - 1 : prev - 1);
  };

  const handleNextProject = () => {
    setCurrentProject(prev => prev === projectViews.length - 1 ? 0 : prev + 1);
  };

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <>
      <ProjectViewsSection id="project-views" role="region" aria-label="Project Interface Views">
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            role="heading"
            aria-level={2}
          >
            Vistas de Proyectos
          </SectionTitle>
          
          <ViewsContainer>
            <MainImageContainer>
              <MainImage
                src={projectViews[currentProject].image}
                alt={`${projectViews[currentProject].title} interface view`}
                onClick={() => openModal(projectViews[currentProject].image)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <ImageOverlay>
                <ProjectInfo>
                  <h3>{projectViews[currentProject].title}</h3>
                  <p>{projectViews[currentProject].description}</p>
                </ProjectInfo>
              </ImageOverlay>

              <NavigationButtons>
                <button 
                  onClick={handlePrevProject}
                  aria-label="Previous project"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={handleNextProject}
                  aria-label="Next project"
                >
                  <FaChevronRight />
                </button>
              </NavigationButtons>

              <ExpandButton
                onClick={() => openModal(projectViews[currentProject].image)}
                aria-label="Expand image to full screen"
              >
                <FaExpand />
              </ExpandButton>
            </MainImageContainer>

            <ProjectIndicator>
              {projectViews.map((_, index) => (
                <span
                  key={index}
                  className={currentProject === index ? 'active' : ''}
                  onClick={() => setCurrentProject(index)}
                  role="button"
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </ProjectIndicator>
          </ViewsContainer>
        </div>
      </ProjectViewsSection>

      <Modal 
        show={modalOpen} 
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: modalOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {modalImage && <img src={modalImage} alt="Expanded project view" />}
        <button onClick={closeModal} aria-label="Close modal">
          ×
        </button>
      </Modal>
    </>
  );
};

export default ProjectViews;
