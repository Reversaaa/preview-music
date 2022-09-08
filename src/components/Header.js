import styles from "./Header.module.css"
import logo from '../assets/logo.svg'
export function Header() {
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <span className={styles.title}>Leo Furlanetto</span>
        <nav className={styles.menu}>
            
            
            <a className={styles.active}href="#">Home</a>
            <a className={styles.active}href="#">Músicas</a>
            <a className={styles.active}href="#">Projetos</a>
            <a className={styles.active}href="#">Social</a>
            
        </nav>
      </header>
    );
  }
  
  