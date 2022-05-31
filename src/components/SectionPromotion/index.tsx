import Button3 from "../Button3";
import styles from './Promo.module.scss';

export default function SectionPromotion() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h2>
                        Condição imperdível
                    </h2>
                    <strong className={styles.subtitle}>
                        Compre hoje e garanta
                    </strong>
                    <p
                        data-aos="fade-right"
                        data-aos-duration="200"
                        data-aos-offset="-100"
                    >
                        &mdash; 12% de desconto e pagamento em até
                         <b>3x sem juros</b>;
                    </p>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-offset="-100"
                    >
                        &mdash; Até <b>10 meses</b> para confeccionar sua roupa.
                        Não se preocupe se suas medidas aumentaram ou diminuíram,
                        estará sempre elegante;
                    </p>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="400"
                        data-aos-offset="-100"
                    >
                        &mdash; Condição muito especial por <b>tempo limitado</b>;
                    </p>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-offset="-100"
                    >
                        &mdash; Poder presentear alguém com uma roupa de alta costura,
                        <b>exclusiva</b>.

                    </p>
                    <div className={styles.buttonContainer} >
                        <Button3
                            description="Garanta essa condição especial!"
                            link="https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628"
                        />
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <img
                        src="/images/photopromo.svg"
                        alt="Promoção"
                    />
                </div>
            </div>
        </div>
    )
}