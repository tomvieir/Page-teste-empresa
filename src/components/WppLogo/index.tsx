import styles from './WppLogo.module.scss'

export default function WppLogo() {
    return (
        <div className={styles.wppContainer}>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628">
                <div className={styles.wppLogo}></div>
            </a>
        </div>
    )
}