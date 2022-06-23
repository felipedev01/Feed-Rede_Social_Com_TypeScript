import styles from'./Header.module.css'
import igniteLogo from '../Assets/Ignite-logo.svg'

console.log(igniteLogo)

export function Header(){

    return(
    <div>
      <header className={styles.Header}> 
        <img src="/src/Assets/Ignite-logo.svg" alt="Logo Ignite" />
        </header>
    </div>
        
       
    )
}