import Image from 'next/image'

import styles from './Footer.module.css'


import Facebook from '@/public/facebook.png'
import Whatsapp from '@/public/WhatsApp.png'
import Instagram from '@/public/instagram.png'
import Twitter from '@/public/twitter.png'



export default function Footer() {
    return <footer className={styles.footer}>

        <div className={styles.section_padding}>

            <div className={styles.footer_portail}>
                <h2>CCPJ</h2>
                <p>
                    Notre Site permettra aux jeunes de s'épanouir sans toute fois oublier leurs Objectifs
                </p>

                <div className={styles.container}>
                    <div className={styles.social_icons}>
                        <a href="lien_vers_Facebook" target="_blank">
                            <Image src={Facebook} alt="Logo de facebook" />
                        </a>
                        <a href="lien_vers_Instagram" target="_blank">
                            <Image src={Instagram} alt="Logo de facebook" />
                        </a>
                        <a href="lien_vers_twitter" target="_blank" >
                            <Image src={Twitter} alt="Logo de Twitter" />
                        </a>
                        <a href="lien_vers_Whatsapp" target="_blank">
                            <Image src={Whatsapp} alt="Logo de Whatsapp" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footer_links}>
                <h2>Activités</h2>
                <ul>
                    <li><a href="#">Soccer</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Handball</a></li>
                    <li><a href="#">Salle de Gym</a></li>
                    <li><a href="#">Danser</a></li>
                    <li><a href="#">Chanter</a></li>
                    <li><a href="#">Pattinage</a></li>
                </ul>
            </div>

            <div className={styles.footer_links}>
                <h2>Atelier Instructif</h2>
                <ul>
                    <li><a href="#">Mathematique</a></li>
                    <li><a href="#">Physique</a></li>
                    <li><a href="#">Francais</a></li>
                    <li><a href="#">Anglais</a></li>
                    <li><a href="#">Science</a></li>
                </ul>
            </div>

            <div className={styles.footers}>
                <h2>Contacts</h2>
                <p>555 555-9999</p>
                <p>YvanaOlivier@gmail.com</p>
                <p>988 av Mc Arthur, K1L6P3, OTTAWA, ON</p>
            </div>

        </div>


        & copy; Yvana ET Olivier | Collège La Cité
    </footer >

}
