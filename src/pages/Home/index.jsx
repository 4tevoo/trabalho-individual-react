import React, { useState } from 'react';
import * as S from './style';
import Card from '../../components/Card';
import { listaGatos, videoLendario } from '../../data/dados';

function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [favoritos, setFavoritos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);

  const lidarComFavoritar = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  const categorias = ['Todos', '❤️ Favoritos', ...new Set(listaGatos.map(gato => gato.categoria))];

  const gatosFiltrados = listaGatos.filter(gato => {
    if (categoriaAtiva === '❤️ Favoritos') {
      return favoritos.includes(gato.id);
    }
    if (categoriaAtiva === 'Todos') {
      return true;
    }
    return gato.categoria === categoriaAtiva; 
  });

  return (
    <S.PaginaContainer>
      <S.Cabecalho>
        <h1>Galeria de Gatos Diferenciados</h1>
        <p>Aproveite os efeitos passando o mouse nos cards! (Alguns)</p>
      </S.Cabecalho>

      <S.AreaControles>
        <S.BotaoLendario onClick={() => setModalAberto(true)}>
          INVOCAR MONTAGEM LENDÁRIA (CUIDADO)
        </S.BotaoLendario>

        <S.ContainerFiltros>
          {categorias.map(cat => (
            <S.BotaoFiltro 
              key={cat} 
              $ativo={categoriaAtiva === cat}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </S.BotaoFiltro>
          ))}
        </S.ContainerFiltros>
      </S.AreaControles>

      {}
      <S.GradeCards>
        {}
        {categoriaAtiva === '❤️ Favoritos' && gatosFiltrados.length === 0 ? (
          <p style={{ color: '#ffffff', backgroundColor: 'rgba(0,0,0,0.6)', padding: '15px 30px', borderRadius: '20px', fontWeight: 'bold' }}>
            Nenhum gatinho favoritado ainda... Dê um ❤️ em algum deles! Se não vc é mau
          </p>
        ) : (
          gatosFiltrados.map(gato => (
            <Card 
              key={gato.id} 
              gato={gato} 
              onFavoritar={lidarComFavoritar}
              isFavorito={favoritos.includes(gato.id)}
            />
          ))
        )}
      </S.GradeCards>

      {}
      {modalAberto && (
        <S.OverlayModal onClick={() => setModalAberto(false)}>
          <S.ConteudoModal onClick={(e) => e.stopPropagation()}>
            <S.BotaoFecharModal onClick={() => setModalAberto(false)}>
              X Fechar
            </S.BotaoFecharModal>
            <video src={videoLendario} autoPlay controls />
          </S.ConteudoModal>
        </S.OverlayModal>
      )}
    </S.PaginaContainer>
  );
}

export default Home;