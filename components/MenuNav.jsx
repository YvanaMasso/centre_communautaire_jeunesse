import styles from './MenuNav.module.css'

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#">Acceuil</a>
            </li>
            <li>
                <a href="#">Activités</a>
            </li>
            <li>
                <a href="#">Atelier Instructif</a>
            </li>
            <li>
                <a href="#">Se connecter</a>
            </li>
        </ul>
    </nav>
}