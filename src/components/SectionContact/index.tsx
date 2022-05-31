
import Button4 from '../Button4';
import FormEmail from '../FormEmail';
import SectionTitle from '../SectionTitle';
import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.container} id='contact'>
            <div className={styles.title}>
                <SectionTitle title="Contato" />
            </div>
            <div className={styles.content}>
                <div className={styles.contactsContainer}>
                    <div className={styles.contact}>
                        <strong>Telefones</strong>
                        <p>+55 (11) 3088-0757</p>

                        <strong>E-mail</strong>
                        <p>renee@reneetrajar.com.br</p>

                        <h4>Atendimento Personalizado</h4>
                    </div>

                    <Button4
                        description='Clique aqui!'
                        link='https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628'
                    />
                </div>

                <div className={styles.formContainer}>
                    <FormEmail />
                </div>
            </div>
        </div>
    )
}