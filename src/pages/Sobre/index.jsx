import javaImg from '../../assets/javaa.png'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.png'
import fotoPerfil from '../../assets/homeimg.png'
import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
      
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Isaura da Hora</h1>
          <h2 className={styles.profissao}>Desenvolvedora Front-End</h2>
          <p className={styles.sobreMim}> Acredito na intersecção da Arte e Tecnologia, por isso me dedico à viver desenvolvendo trabalhos nesses dois campos. 
          Sou Bacharela em Pintura pela Escola de Belas Artes da Universidade Federal do Rio de Janeiro (2023) e Artista Multidisciplinar. Participei de exposições artísticas em galerias como o Centro Cultural Correios (RJ), Galeria Macunaíma e Galeria Vórtice, na UFRJ. 
          Possuo experiência na área de Artes Visuais - com ênfase em Pintura - Design e Animação. E também conto com uma especialização técnica em Animação 2D, tendo feito parte da produção de dois curtas animados: Mu&Mia (2021) e De Repente Bobo (2022). 
          Atuei como bolsista de Pesquisa, Conteúdo e Designer no Sistema de Museus, Acervos e Patrimônio Cultural da UFRJ (SIMAP). E atualmente, meus interesses estão centrados nos seguintes temas: Arte e Tecnologia, Afrofuturismo, Cultura e Raça, Arte - Educação. 
          Com estudos em andamento de Desenvolvimento Front-End e UX/UI Design. </p>
      </div>
      <div className={styles.subtitulo}>
        <h3><b> Projetos como Desenvolvedora Front-end</b> </h3>
      </div>

      <div className={styles.subtitulo}>
        <img src={htmlImg} />
        <p>
        Projeto desenvolvido utilizando as linguagens de HTML e CSS. A atividade faz parte do Ciclo Formativo em Tecnologia da PretaLab, onde a proposta era que as alunas desenvolvessem para o Módulo de HTML-CSS uma Loja Virtual funcional. 
        </p>
        <a class="link-projeto" href="https://github.com/isauradahora/repo-project/tree/master/modulo-html-css/loja%20virtuall" target="_blank"> Clique aqui</a>

      </div>

      <div className={styles.subtitulo}>
      <a class="link-projeto" href="https://isauraportfolio.netlify.app/" target="_blank"> Clique aqui</a>
        <p>
        Projeto final do Módulo de HTML-CSS do Ciclo Formativo em Tecnologia da PretaLab. A atividade pode ser vista aqui, meste site, em estado funcional, mas também pode ser checada em meu GitHub. 
        </p>
        <img src={cssImg} />
      </div>

      <div className={styles.subtitulo}>
        <img src={javaImg} />
        <p>
        Projeto final do módulo de Javascript da Formação em Tecnologia da PretaLab.
        </p>
        <a class="link-projeto" href="https://projetocalcjs.netlify.app/" target="_blank"> Clique aqui</a>
      </div>
    </>
  )
}

export default Sobre;