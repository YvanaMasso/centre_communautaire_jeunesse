import Image from 'next/image'
import MenuNav from './MenuNav'

import styles from './Header.module.css'

import Logo from '@/public/Logo.png'



export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image src={Logo} alt="Logo de notre site" />
            <h1>Centre Communautaire Pour Jeunes </h1>
        </div>
        <MenuNav />
    </header>
}