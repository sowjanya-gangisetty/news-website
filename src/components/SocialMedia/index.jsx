import Twitter from '../../assets/media/twitter.png'
import Facebook from '../../assets/media/facebook.png'
import styles from'./social-media.module.css'

const SocialMedia = () => {
    return (
        <div className={styles.mediaContainer}>
            <img className={styles.icon} src={Twitter} />
            <img className={styles.icon} src={Facebook} />
        </div>

)
}

export default SocialMedia