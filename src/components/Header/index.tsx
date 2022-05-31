import Link from 'next/link'
import styles from './Header.module.scss'

interface headerProps {
    active: boolean
}

export default function Header({ active }: headerProps) {

    return (
        <header className={active ? styles.headerContainer : styles.headerContainerBlack}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}></div>
                </div>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="#empresa">
                                <a className={styles.navLink}>EMPRESA</a>
                            </Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link href="#camisaria">
                                <a className={styles.navLink}>CAMISARIA</a>
                            </Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link href="#alfaiataria">
                                <a className={styles.navLink}>ALFAIATARIA</a>
                            </Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link href="#depoimentos">
                                <a className={styles.navLink}>DEPOIMENTOS</a>
                            </Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link href="#contact">
                                <a className={styles.navLink}>CONTATO</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}