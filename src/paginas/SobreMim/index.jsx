import styles from './SobreMim.module.css'
import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
      
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Matheus!
      </h3>
      <img
        src={fotoSobreMim}
        alt='Foto minha'
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Sou um programador Full Stack, com foco tanto em design de interface do usuário quanto em programação do lado do servidor.       </p>
      <p className={styles.paragrafo}>
        Sou apaixonado por aprender e entender software em profundidade, e trabalho intensamente para atender as demandas dos meus projetos.    </p>
      <p className={styles.paragrafo}>
        Busco exercer as minhas hard skills satisfazendo as expectativas dos clientes e criando projetos inovadores para o mercado.    </p>

    </ PostModelo>
  )
}
