import styles from './selected-article.module.css'
import { getImageURL } from '../../utils/functions'

const SelectedArticle = ({ article, updateFunction }) => {
    let { image, headline, deck, story, category } = article
    const handleClick = () => {
        updateFunction(null)
    }
    return (
        <div className={styles.article} >
            <img src={getImageURL(image)} />
            <h2>{headline}</h2>
            <p>{deck}</p>
            <p>{story}</p>
            <p>{category}</p>
            <p className={styles.back} onClick={handleClick}>Back to previous page</p>
        </div>
    )
}

export default SelectedArticle