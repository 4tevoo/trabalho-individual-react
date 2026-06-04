import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { listaGatos } from '../../data/dados';
import icon from '../../assets/favicon.png';

function Sombrio() {
  const navigate = useNavigate();

  const osGatos = listaGatos.slice(0, 12);

  const loresManuais = [
    "Lore do Gato 1: Ganana, o Gato Banana, é um triste enigma que ronda a internet (e os bananais). Pouco se sabe sobre esta criatura, apenas que ele é uma mistura de gato e banana, e que sua expressão melancólica é tão profunda quanto a casca que o envolve. Alguns dizem que ele é o resultado de um experimento científico maluco, enquanto outros acreditam que ele é um ser místico que habita os sonhos dos amantes de bananas. O que é certo é que Ganana é um símbolo de tristeza e doçura, e sua imagem se tornou um meme icônico para expressar sentimentos de desânimo e amargura com um toque de humor.",

    "Lore do Gato 2: O Gato 'Bleh', como é conhecido, é um dos mais debochados e ousados. Não importa o quão poderosa é sua argumentação, quando ele bota sua língua para fora, você fica desmoralizado e desiste. Ele é o mestre do deboche, e sua língua é a arma mais afiada que ele possui. Ele é o tipo de gato que não tem medo de mostrar seu desdém por qualquer coisa que considere irritante ou sem sentido. Se você tentar discutir com ele, prepare-se para ser derrotado por um simples gesto de língua. O Gato 'Bleh' é o rei do sarcasmo felino, e sua língua é a prova viva de que às vezes, as palavras não são necessárias para expressar o quanto você está cansado de algo.",

    "Lore do Gato 3: O Desconfigato julga e desconfia de tudo. Ele constantemente avalia o mundo ao seu redor e consegue descobrir todos os segredos, inclusive todos os seus. Dizem que ele sabe a verdade oculta deste mundo, mas ele não conta, pois não confia em ninguém o suficiente para compartilhar seu poderoso conhecimento.",

    "Lore do Gato 4: Traumatigato é um gato que vive em constante estado de choque. Ele lutou em todas as guerras que se pode imaginar (do lado certo, claro) e viu coisas que nenhum outro gato ousou ver. Ele também é um herói, é por causa dele que todas as guerras acabaram. Mas, ainda há guerras pois ele está traumatizado demais para voltar para o campo de batalha. Se um dia ele decidir voltar, a paz no mundo reinará.",

    "Lore do Gato 5: O Curiosogato é um gato que tem uma curiosidade insaciável. Para conseguir ter curiosidade sobre tudo, ele possui uma memória extremamente curta e por isso se encanta por tudo como se fosse a primeira vez. Seu principal dilema é conseguir lembrar o código que ele fez na noite passada, e por isso fica as vezes em choque sem saber o que ele mesmo fez. Fato curioso: ele foi processado pelo CuriousCat por ter o mesmo nome, mas venceu pois ele tem mais de mil anos, precedendo o website.",

    "Lore do Gato 6: Gatoruja é um gato coruja. Pouco se sabe além de sua incrível capacidade de cantar. Já cantou fenômenos como New Soul de David Donatien e Yael Naim. Seu primo é um Gatumano que canta Waiting for Love de Calvin Harris. É um talento familiar impressionante, mas pouco se sabe se ele é capaz de compreender o que faz, se é apenas um animal que imita tal qual um papagaio ou se ele realmente tem uma profunda conexão com essas músicas.",

    "Lore do Gato 7: Este é Miguel ou Michael, o gato ousado. Ele é conhecido por sua imensa coragem e por estar sempre disposto a enfrentar desafios, por mais perigosos que sejam. Dizem que ele foi o gato de Schrodinger, e até hoje caminha pelas ruas da Áustria falando 'Avisem a Schrodinger que eu estou vivo e quero vingança!', e afirmando que o veneno foi fraco demais para todo o seu poder. Dizem também que um meteoro estava a caminho da Terra para extinção, mas para ele, era apenas uma bolinha que ele bateu com a pata e desviou a rota, salvando o mundo. Mas há quem diga que é um exagero, pois uma pata só seria absurdo, usou duas.",

    "Lore do Gato 8: Este é BOP, o gato do estalo. Sabe quando o ouvido tampa repentinamente? Foi ele do outro lado do mundo, suas ondas de choque são impressionante. Dizem que o poder de seu estalo é tão grande que os tsunamis e terremotos são causados por ele, mas é impossível confirmar.",

    "Lore do Gato 9: Este é o O I I A. Apesar do nome estranho, é o som que ele faz. Ele é capaz de fazer montagens e edições incríveis, mas poucos sabem como que ele mexe no Photoshop. Ele também gira, muito. Cientistas do mundo todo buscam ele para fazer um gerador de energia infinita e renovável, mas ninguém consegue capturá-lo, pois ele gira tanto que desaparece.",

    "Lore do Gato 10: Esses são os Mestres, Deuses. Meus queridos felinos, a mãe e suas quatro crias.",

    "Lore do Gato 11: Este é o Gato Feliz e Saltitante. Ele é feliz e saltitante, independente do que aconteça. Sejamos como ele.",

    "Lore do Gato 12: Em um belo dia de aula, um mistério aconteceu. Um gato sombrio, secreto e misterioso, surgiu no meio da aula de Front-End Essencial do Serratec e roubou toda a luz de Felipe Ferreira Menegueli, o Mestre do Front. Felipe se tornou uma sombra, consumido pela escuridão mas foi salvo pelos alunos que os resgataram após hackear o sistema de segurança do lacaio do Gato Sombrio, o Professor de Back-End Java/POO, o Breno, o soldado número um do Gato Sombrio. O nome do Gato Sombrio é especulado de ser 'ENEL', mas não há evidências da sua conexão com a empresa de energia, apesar de ambos causarem escuridões ocasionais..."
  ];

  // Nos links descobri esse noopener e noreferrer que aumenta a segurança de links abertos 
  // com _blank, evitando que a página de destino tenha acesso à página de origem via window.opener
  // e também evitando que a página de destino possa redirecionar a 
  // página de origem para um site malicioso. 

  // É uma prática recomendada para proteger os usuários contra ataques de phishing e outras ameaças de segurança ao abrir links em novas abas ou janelas.
  // é meio desnecessário para o escopo desse projeto, mas seguro morreu de velho.
  return (
    <S.SombrioContainer>
      <S.TituloPagina>💀 Arquivos Confidenciais: O Lado Sombrio dos Gatos 🐱</S.TituloPagina>

      <S.GradeLore>
        {osGatos.map((gato, index) => {
          const ehVideo = gato.midia && gato.midia.endsWith('.mp4');

          return (
            <S.ItemLore key={gato.id}>
              {ehVideo ? (
                <video
                  src={gato.midia}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="quadrado-gato"
                />
              ) : (
                <img
                  src={gato.midia}
                  alt="Gato Sombrio"
                  className="quadrado-gato"
                />
              )}

              <div className="bloco-texto">
                <h3>Entidade #{gato.id}</h3>
                <p>{loresManuais[index]}</p>
              </div>
            </S.ItemLore>
          );
        })}
      </S.GradeLore>

      <S.SecaoSobre>
        <h2>ℹ️ Relatório técnico do Projeto (conforme os requisitos do professor)</h2>
        <p>Este memorial documenta as decisões de arquitetura e conceitos de engenharia de software aplicados no projeto:</p>
        <S.ContainerAutor>
          <h4>Made by Tevo</h4>
          <img src={icon} alt="Ícone do Site" className="foto-autor" />
          <a href="https://github.com/4tevoo" target="_blank" rel="noopener noreferrer">
            🔗 GitHub do Serratec
          </a>
          <a href="https://github.com/4Tevo" target="_blank" rel="noopener noreferrer">
            🔗 GitHub Pessoal (tá parado tem um tempo, releva)
          </a>
        </S.ContainerAutor>
        <h3>1. Estrutura de Dados (dados.jsx)</h3>
        <p>Conforme solicitado, criei o arquivo isolado <code>src/data/dados.jsx</code> contendo um array com <b>12 objetos</b> (superando o mínimo de 10 para ficar bonitinho). Cada objeto felino (e professor) possui, no mínimo, 5 propriedades estruturadas: <code>id</code>, <code>nome</code>, <code>categoria</code>, <code>descricao</code> e <code>midia</code>.</p>

        <h3>2. Componentes e Props Reutilizáveis</h3>
        <p>Foi desenvolvido o componente modular <code>Card</code> na pasta <code>src/components/Card/</code>. Ele é totalmente genérico e puro: recebe os dados de cada gato estritamente via <b>Props</b> e renderiza qualquer item de forma dinâmica através do mapeamento (<code>.map()</code>) feito na página principal, garantindo a reutilização total do código.</p>

        <h3>3. Estilização Moderna (styled-components)</h3>
        <p>Toda a identidade visual e o design (tanto da Galeria principal quanto desta página do Lado Sombrio) foram construídos utilizando <b>styled-components</b>. Seguindo a arquitetura sugerida, todas as regras de CSS-in-JS foram completamente isoladas em arquivos <code>style.jsx</code> separados de sua lógica estrutural.</p>

        <h3>4. Interações com o Estado (useState)</h3>
        <p>Fomos além do requisito mínimo de uma interação, implementando múltiplos estados com o hook <code>useState</code>:</p>
        <ul>
          <li><b>Filtro por Categorias:</b> Altera dinamicamente os cards exibidos na tela ao selecionar as tags na Home.</li>
          <li><b>Sistema de Favoritos:</b> Um array dinâmico controla o estado de favoritar de cada gato, bloqueando com um alerta personalizado caso o usuário tente favoritar o ID 10 (afinal os meus gatinhos são só meus).</li>
          <li><b>Modais e Telas:</b> Controlam a abertura do modal de vídeo secreto e o disparo do loading.</li>
        </ul>

        <h3>Diferenciais Próprios Adicionados (Além do Enunciado)</h3>
        <ul>
          <li><b>useEffect:</b> Implementado para escutar o ciclo de vida do DOM (<code>window.onload</code>), mantendo uma tela de loading ativa até que o navegador faça o cache completo dos assets pesados. Similar ao que foi feito no projeto de Front-End no Hansa Commerce, mas adaptado para React. (Com z-index excessivo por razões cômicas: o professor havia questionado eu usar z-index: 10000; no projeto de Front-end para cobrir a tela toda e sobrar caso usemos algum elemento com index muito grande. Por isso botei um z-index aqui de 9999 kkkkkkkk)</li>
          <li><b>useRef:</b> Injetado nos cards para manipular tags de <code>&lt;video&gt;</code> diretamente no DOM em eventos de hover, otimizando drasticamente a performance.</li>
          <li><b>React Router Dom:</b> Criação de uma arquitetura SPA (excelente para carregar esses vídeos pesados que gosto de colocar nos sites) de duas páginas para isolar a Galeria Pública desta área confidencial de documentação.</li>
        </ul>
      </S.SecaoSobre>

      <S.BotaoVoltar onClick={() => navigate('/')}>
        ⬅️ Voltar para a Galeria Normal
      </S.BotaoVoltar>
    </S.SombrioContainer>
  );
}

export default Sombrio;