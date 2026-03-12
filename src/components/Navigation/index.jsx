import {useState} from 'react'
import styles from './navigation.module.css'
import { DotsThreeCircleVerticalIcon } from "@phosphor-icons/react";

const categories = ["Home", "World", "Sweden", "Sport", "Entertainment", "Crime"]

const Navigation = ({ updateFunction, setArticle }) => {
    const [mobileMenu, setMobileMenu] = useState(false) 

    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const handleClick = (value) => {
        updateFunction(value === "home" ? null : value)
        setArticle(null)
        showMobileMenu()
    }

    return (
        <nav className={styles.navigation}>
            <DotsThreeCircleVerticalIcon  onClick={showMobileMenu} className={styles.icon} size={32} />
            <div className={`${styles.navContainer}  ${mobileMenu ? styles.active : ''}`}>
                <div className={styles.menuItems}>{categories.map((category, index) => <span onClick={() => handleClick(category.toLowerCase())} key={index} className={styles.navItem}>{category}</span>)}</div>
            </div>
        </nav>
    )

}

export default Navigation