import styles from './SectionClient.module.scss';

export default function SectionClient() {
    return (
        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.section1}>
                    <div className={styles.infos}>
                        <p className={styles.text}>
                            “Faço roupas com o Renee Trajar há mais de duas décadas,
                            o serviço é impecável em todos os detalhes, desde a  costura
                            ao caimento. O Renee tem uma equipe de mestre!”
                        </p>

                        <strong className={styles.author}>
                            Nelson Garey
                        </strong>

                        <p>
                            Advogado  |   Nelson Garey Advogados Associados
                        </p>
                    </div>
                </div>

                <div className={styles.section2} >
                    <img
                        src='/images/photopreview.svg'
                        className={styles.background}
                    />
                </div>

                <div className={styles.imgWrapper}>
                    <img
                        className={styles.photoPreview}
                        src="/images/photopreview2.png"
                        alt="photoPreview"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    />
                </div>
            </div>
        </div>
    )
}