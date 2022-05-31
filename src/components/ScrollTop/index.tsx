import styles from './ScrollTop.module.scss'

export default function ScrollTop() {
    return (
        <div className={styles.scrollContainer}>
            <a href="#banner">
                <div className={styles.scrollLogo}></div>
            </a>
        </div>
    )
}