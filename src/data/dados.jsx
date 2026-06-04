import bananacat from '../assets/bananacat.jpg';
import bananacatChora from '../assets/bananacat_chorando.jpg';
import blehCat from '../assets/bleh_cat.png';
import desconfigato from '../assets/desconfigato.jpg';
import gatoFlashback from '../assets/gato_flashback.png';
import gatoZoiando from '../assets/gato_zoiando.jpg';
import gatoruja from '../assets/gatoruja.jpg';
import michael from '../assets/michael.jpg';
import michaelFalando from '../assets/michael_falando.jpg';
import popClosed from '../assets/pop-closed.jpg';
import popOpen from '../assets/pop-open.jpg';
import fotoMeusGatos from '../assets/meus_gatos.jpeg';
import fotoProf from '../assets/prof.jpg';
import giragato from '../assets/giragato.mp4';
import pulagato from '../assets/pulagato.mp4';

// segredinho hehe, espero que não pese muito
import gatoLendario from '../assets/lendario.mp4'; // ps.: créditos ao @.goldencroissantcat
export const videoLendario = gatoLendario;

import imagemBackground from '../assets/background.jpg';
export const imgBackground = imagemBackground;

export const listaGatos = [
  {
    id: 1,
    nome: "Gato Banana",
    categoria: "Fruta",
    descricao: "Gato banana. Ou banana gato? Ele é triste...",
    midia: bananacat,
    midiaHover: bananacatChora,
    tipo: "imagem-hover"
  },
  {
    id: 2,
    nome: "Gato Bleh",
    categoria: "Debochado",
    descricao: "Mostrando a língua para os prazos apertados dos trabalhos. Dos 4 trabalhos...",
    midia: blehCat,
    tipo: "imagem"
  },
  {
    id: 3,
    nome: "Gato Desconfiado",
    categoria: "Julgador",
    descricao: "O que vc ta olhando???",
    midia: desconfigato,
    tipo: "imagem"
  },
  {
    id: 4,
    nome: "Gato de Guerra",
    categoria: "Brisado",
    descricao: "Dizem que deu DELETE sem WHERE...",
    midia: gatoFlashback,
    tipo: "imagem"
  },
  {
    id: 5,
    nome: "Gato Zoiando",
    categoria: "Curioso",
    descricao: "Tentando entender o código que ele mesmo fez alguns dias atrás...",
    midia: gatoZoiando,
    tipo: "imagem"
  },
  {
    id: 6,
    nome: "Gatoruja",
    categoria: "Brisado",
    descricao: "Gatoruja. Gato coruja. Ou coruja gato? Gato voador noturno.",
    midia: gatoruja,
    tipo: "imagem"
  },
  {
    id: 7,
    nome: "Gato Michael",
    categoria: "Ousado",
    descricao: "Michel, as vezes conhecido como Miguel, o gato ousado.",
    midia: michael,
    midiaHover: michaelFalando,
    tipo: "imagem-hover"
  },
  {
    id: 8,
    nome: "Pop Cat",
    categoria: "Meme Clássico",
    descricao: "A lenda do POP cat.",
    midia: popClosed,
    midiaHover: popOpen,
    tipo: "imagem-hover"
  },
  {
    id: 9,
    nome: "Gato Giratório",
    categoria: "Vídeo Gifs",
    descricao: "O famoso O I I A CAT. Perdi as contas de quantos memes há com ele...",
    midia: giragato,
    tipo: "video"
  },
  {
    id: 10,
    nome: "Meus Chefes",
    categoria: "Família",
    descricao: "Os verdadeiros donos do projeto e responsáveis por eu estar codificando essa hora.",
    midia: fotoMeusGatos,
    tipo: "imagem"
  },
  {
    id: 11,
    nome: "Gato Saltitante",
    categoria: "Vídeo Gifs",
    descricao: "Ele ta muito feliz.",
    midia: pulagato,
    tipo: "video"
  },
  {
    id: 12,
    nome: "Prof no Escuro",
    categoria: "Aulas Infinitas",
    descricao: "Print do exato momento em que a ENEL sequestra o prof",
    midia: fotoProf,
    tipo: "imagem"
  }
];