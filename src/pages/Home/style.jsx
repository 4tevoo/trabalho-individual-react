import styled from 'styled-components';
import { imgBackground } from '../../data/dados';

export const PaginaContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  // Configuração para a imagem cobrir toda a tela de fundo
  background-image: url(${imgBackground});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const Cabecalho = styled.header`
  text-align: center;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 12px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2d3436;
    font-size: 2.2rem;
    margin-bottom: 8px;
  }

  p {
    color: #636e72;
    font-size: 1rem;
    margin: 0;
  }
`;

export const AreaControles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ContainerFiltros = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 12px;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const BotaoFiltro = styled.button`
  background-color: ${props => props.$ativo ? '#d63031' : '#ffffff'};
  color: ${props => props.$ativo ? '#ffffff' : '#2d3436'};
  border: 2px solid #d63031;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d63031;
    color: #ffffff;
  }
`;

export const BotaoLendario = styled.button`
  background: linear-gradient(45deg, #fdcb6e, #e17055);
  color: #ffffff;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(225, 112, 85, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(225, 112, 85, 0.7);
  }
`;

export const GradeCards = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;


export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ConteudoModal = styled.div`
  position: relative;
  width: 90%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;

  video {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(253, 203, 110, 0.6);
  }
`;

export const BotaoFecharModal = styled.button`
  position: absolute;
  top: -45px;
  right: 0;
  background: none;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;