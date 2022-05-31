
import Button2 from '../Button2';
import styles from './Banner.module.scss';

export default function Banner() {
    return (
        <div
            className={styles.container}
            id='banner'
        >
            <div className={styles.content}>

                <div className={styles.logoContainer}>
                    <div className={styles.logo}></div>
                </div>
                <div className={styles.infos}>
                    <strong className={styles.title1}>
                        Elegante é ter um
                    </strong>

                    <strong className={styles.title2}>
                        Alfaiate
                    </strong>

                    <strong className={styles.title3}>
                        para chamar de seu.
                    </strong>

                    <div className={styles.subtitleContainer}>
                        <strong>
                            Compre hoje.
                            <span>
                                pague em até 3x com 12% de desconto
                            </span>
                            e tenha 10 meses para confeccionar!
                        </strong>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button2
                            description='FAÇA JÁ UM ORÇAMENTO'
                            link='https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}