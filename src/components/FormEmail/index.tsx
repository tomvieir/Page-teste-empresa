import styles from './FormEmail.module.scss';

export default function formEmail() {
    return (
        <section className={styles.container}>
            <form className={styles.appForm}>
                <div className={styles.formGroup}>
                    <input type="text" required />
                    <span>Nome</span>
                </div>

                <div className={styles.formGroup}>
                    <input type="text" required />
                    <span>Email</span>
                </div>

                <div className={styles.formGroup}>
                    <textarea required></textarea>
                    <span>mensagem</span>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}