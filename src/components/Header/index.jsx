import styles from './header.module.css'
import Phone from '../Phone'
import SocialMedia from '../SocialMedia'

const Header = () => {
    return (
        <header className={styles.header}>
            <SocialMedia />
            <h1 className={styles.headerTitle}>News of the world</h1>
            <Phone />
        </header>
    )
}

export default Header