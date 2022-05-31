import styles from './Badges.module.scss';

export default function Badges() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img
                        src="/images/qualidade.svg"
                        alt="qualidade"
                    />

                    <div className={styles.textContainer1}>
                        <strong>Qualidade</strong>
                        <p>Camisaria e Alfaiataria 100% artesanal.</p>

                    </div>
                </div>

                <div className={styles.item}>
                    <img
                        src="/images/confianca.svg"
                        alt="confiança"
                    />

                    <div className={styles.textContainer2}>
                        <strong>Confiança</strong>
                        <p>Atendimento personalizado no escritório ou residência.</p>

                    </div>
                </div>

                <div className={styles.item}>
                    <img
                        src="/images/experiencia.svg"
                        alt="experiência"
                    />

                    <div className={styles.textContainer3}>
                        <strong>Experiência</strong>
                        <p>Tradição e modernidade proporcionando elegância.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}