import sefort_logo from '../images/sefort_logo.png'
import styles from './Components.module.css'

export default function HeaderPage () {
    return (
        <header className={styles.header_page}>
            <nav className={styles.header_nav}>
                <img src={sefort_logo} alt='' className={styles.header_image}></img>
                <p className={styles.p_name}> Seminário de formação teológica</p>
            </nav>
        </header>
    )

}