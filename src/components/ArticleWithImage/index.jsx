import styles from './article.module.css'
import {getImageURL} from '../../utils/functions'

const ArticleWithImage = ({content, setArticle}) => {
    let {headline, deck, category, image} = content;

    const handleClick = () => {
        setArticle(content)
    }
    
    return (
        <div onClick={handleClick} className={styles.article}>
            {image && <img src={getImageURL(image)} height="auto" width="100%" />}
            <div className={styles.headline}>{headline}. 
                <span className={styles.deck}>{deck}</span>
            </div>
            <div className={styles.category}>{category}</div>
        </div>
    )
}

export default ArticleWithImage