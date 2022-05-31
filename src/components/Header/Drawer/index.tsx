import styles from './Drawer.module.scss'
import { useState } from 'react'
import Link from 'next/link'


export default function Drawer() {
    const [open, setOpen] = useState(false)
    const toggleMode = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.drawer}>
            <div className={open ? styles.iconActive : 'icon'} onClick={toggleMode}>
                <div className={styles.hamburgerIcon}>
                    <div className={styles.hamburgerLine1}></div>
                    <div className={styles.hamburgerLine2}></div>
                    <div className={styles.hamburgerLine3}></div>
                </div>

                <aside>
                    <nav>
                        <ul>
                            <li>
                                <Link href='#empresa'>
                                    <a>EMPRESA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#camisaria'>
                                    <a>CAMISARIA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#alfaiataria'>
                                    <a>ALFAIATARIA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#depoimentos'>
                                    <a>DEPOIMENTOS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#contact'>
                                    <a>CONTATOS</a>
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <div className={styles.contactContainer}>
                        <strong className={styles.title}>TELEFONES</strong>
                        <strong>+55 (11)3088-0757</strong>
                        <strong className={styles.title}>E-MAIL</strong>
                        <strong>renee@reneetrajar.com.br</strong>
                    </div>
                </aside>
            </div>
        </div>

    )
}