import styles from './home.module.css'
import homeImg from '../../assets/homeimg.png'
import java from '../../assets/java.png'
import portfolios from '../../assets/portfolios.png'

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
            Isaura da Hora | Portfólio
        </h1>
        <img src={homeImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>
        Oi, eu sou a Isaura! Tenho 25 anos e estou na minha transição de carreira para área da Tecnologia. 
        Sou formada em Pintura, pela Escola de Belas Artes da UFRJ. 
        Recentemente iniciei meus estudos voltados para UX/UI Design e Programação Front-End.
        </p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Projetos desenvolvidos</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={portfolios} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Meu Portfólio</h3>
              <p className={styles.texto}>Projeto final do Módulo de HTML-CSS do Ciclo Formativo em Tecnologia da PretaLab. </p>
              <a class="link-projeto" href="https://isauraportfolio.netlify.app/" target="_blank"> Clique aqui</a>
            </div>
            </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={java} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Projeto Javascript</h3>
              <p className={styles.texto}>Projeto final do módulo de Javascript da Formação em Tecnologia da PretaLab.</p>
              <a class="link-projeto" href="https://projetocalcjs.netlify.app/" target="_blank"> Clique aqui</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home