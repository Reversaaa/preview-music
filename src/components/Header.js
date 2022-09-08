import styles from "./Header.module.css"
import logo from '../assets/logo.svg'
export function Header() {
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <span className={styles.title}>Leo Furlanetto</span>
        <nav>
            
            <a className={styles.active}href="#">Home</a>
            <a href="#">Músicas</a>
            <a href="#">Projetos</a>
            <a href="#">Social</a>
            
            
        </nav>
      </header>
    );
  }
  
  