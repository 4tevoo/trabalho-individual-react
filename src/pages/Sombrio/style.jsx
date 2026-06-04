import styled from 'styled-components';
import imagemDark from '../../assets/background_obscuro.jpg'; 

export const SombrioContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url(${imagemDark});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Segoe UI', sans-serif;
  color: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TituloPagina = styled.h1`
  font-size: 2.2rem;
  color: #e17055;
  text-shadow: 0 0 10px rgba(225, 112, 85, 0.5);
  margin-bottom: 30px;
  text-transform: uppercase;
  text-align: center;
`;

export const GradeLore = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const ItemLore = styled.div`
  background-color: rgba(30, 39, 46, 0.85);
  border-left: 5px solid #e17055;
  padding: 20px;
  border-radius: 4px 12px 12px 4px;
  display: flex;
  gap: 25px;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);

  .quadrado-gato {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
    border: 2px solid #353b48;
    flex-shrink: 0;
  }

  .bloco-texto {
    flex: 1;
  }

  h3 {
    color: #fdcb6e;
    margin-bottom: 8px;
    font-size: 1.2rem;
  }

  p {
    color: #dcdde1;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const SecaoSobre = styled.main`
  background-color: rgba(15, 18, 20, 0.95);
  border: 1px solid #353b48;
  padding: 35px;
  border-radius: 16px;
  max-width: 850px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
  margin-bottom: 40px;

  h2 { color: #e17055; margin-bottom: 15px; border-bottom: 1px solid #353b48; padding-bottom: 10px; }
  h3 { color: #fdcb6e; margin-top: 20px; margin-bottom: 5px; }
  p, li { color: #f5f6fa; line-height: 1.6; font-size: 1rem; margin-bottom: 10px; }
  ul { margin-left: 20px; }
  code { background-color: #2f3640; color: #fdcb6e; padding: 2px 6px; border-radius: 4px; }
`;

export const BotaoVoltar = styled.button`
  background-color: #e17055;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(225, 112, 85, 0.4);
  transition: all 0.2s;
  margin-bottom: 40px;

  &:hover { 
    background-color: #d63031; 
    transform: translateY(-2px); 
  }
`;

export const ContainerAutor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(30, 39, 46, 0.4);
  border: 1px solid #353b48;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;

  h4 {
    color: #fdcb6e;
    font-size: 1.1rem;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .foto-autor {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 12px;
    border: 3px solid #e17055;
    box-shadow: 0 0 15px rgba(225, 112, 85, 0.3);
    margin-bottom: 12px;
  }

  a {
    color: #6c5ce7;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.95rem;
    transition: color 0.2s;
    margin-top: 5px;

    &:hover {
      color: #a29bfe;
      text-decoration: underline;
    }
  }
`;