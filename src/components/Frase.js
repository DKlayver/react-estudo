import styles from './Frase.module.css'

function Frase() {

    return(
        <div className={styles.FraseContainer}>
          <p className={styles.fraseContent}>Essa é uma frase de um componente</p>  
        </div>

    )
}

export default Frase