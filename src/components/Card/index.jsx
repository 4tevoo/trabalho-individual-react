import React, { useState, useRef } from 'react';
import * as S from './style';

function Card({ gato, onFavoritar, isFavorito }) {
  const [imagemAtual, setImagemAtual] = useState(gato.midia);
  
  const videoRef = useRef(null);

  const lidarComMouseEnter = () => {
    if (gato.tipo === 'imagem-hover') {
      setImagemAtual(gato.midiaHover);
    } else if (gato.tipo === 'video' && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Aguardando interação do usuário:", err));
    }
  };

  const lidarComMouseLeave = () => {
    if (gato.tipo === 'imagem-hover') {
      setImagemAtual(gato.midia);
    } else if (gato.tipo === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <S.CardContainer 
      onMouseEnter={lidarComMouseEnter} 
      onMouseLeave={lidarComMouseLeave}
    >
      {}
      <S.MediaContainer>
        {gato.tipo === 'video' ? (
          <video 
            ref={videoRef}
            src={gato.midia} 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={gato.tipo === 'imagem-hover' ? imagemAtual : gato.midia} 
            alt={gato.nome} 
          />
        )}
      </S.MediaContainer>

      {}
      <S.CardTitulo>{gato.nome}</S.CardTitulo>
      <S.CardCategoria>{gato.categoria}</S.CardCategoria>
      <S.CardDescricao>{gato.descricao}</S.CardDescricao>
      
      {}
      <S.BotaoFavorito 
        $isFavorito={isFavorito}
        onClick={() => onFavoritar(gato.id)}
      >
        {isFavorito ? '❤️ Favoritado!' : '🤍 Favoritar'}
      </S.BotaoFavorito>
    </S.CardContainer>
  );
}

export default Card;