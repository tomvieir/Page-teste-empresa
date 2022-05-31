import Button from "../Button";
import styles from './Alfaiataria.module.scss';


export default function Alfaiataria() {
    return (
        <div
            className={styles.container}
            id='alfaiataria'
        >
            <div
                className={styles.content}
                data-aos="fade-up"
            >
                <div className={styles.textContainer}>
                    <h2>
                        Alfaiataria
                    </h2>
                    <strong>
                        &mdash;TOTALMENTE FEITO A MÃO SOB MEDIDA
                    </strong>

                    <div className={styles.lists}>
                        <ul className={styles.list1}>
                            <li>100% Algodão</li>
                            <li>Monograma</li>
                            <li>Slim</li>
                        </ul>

                        <ul className={styles.list2}>
                            <li>Nacionais e Importados</li>
                            <li>Tradicionais e Esportivas</li>
                            <li>Casamentos</li>
                        </ul>
                    </div>

                    <div className={styles.button}>
                        <Button
                            description="Quero um orçamento"
                            link='https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628'
                        />
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <div className={styles.img}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
} 