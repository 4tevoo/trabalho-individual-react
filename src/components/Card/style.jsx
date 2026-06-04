import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #f0f0f0;
  border-radius: 16px;
  padding: 16px;
  width: 260px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(4px); /* Dá um efeito leve de vidro sobre o background */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    border-color: #fdcb6e; /* Borda dourada de leve no hover */
  }
`;

export const MediaContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000; /* Fundo preto para o vídeo não ter barras brancas estranhas */
  display: flex;
  align-items: center;
  justify-content: center;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz a imagem/vídeo preencher o espaço sem distorcer */
  }
`;

export const CardTitulo = styled.h3`
  margin: 12px 0 6px 0;
  color: #2d3436;
  font-size: 1.25rem;
`;

export const CardCategoria = styled.span`
  background-color: #ffeaa7;
  color: #d63031;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CardDescricao = styled.p`
  color: #636e72;
  font-size: 0.88rem;
  line-height: 1.4;
  margin-bottom: 16px;
  flex-grow: 1; /* Empurra o botão de favoritar sempre para o rodapé */
`;

export const BotaoFavorito = styled.button`
  background-color: ${props => props.$isFavorito ? '#ff7675' : '#fab1a0'};
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: ${props => props.$isFavorito ? '#d63031' : '#e17055'};
  }

  &:active {
    transform: scale(0.98);
  }
`;