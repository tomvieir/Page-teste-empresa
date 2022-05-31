import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logoWrapper}>
            <div className={styles.logo}></div>
        </div>
    )
}