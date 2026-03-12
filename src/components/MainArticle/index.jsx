import styles from './main-article.module.css'
import {getImageURL} from '../../utils/functions'

const MainArticle = ({article, setArticle}) => {
   let {image, headline, deck, story, category} = article

   const handleClick = () => setArticle(article)
   

    return (
        <div onClick={handleClick} className={styles.article} >
            <img src={getImageURL(image)} />
            <h2>{headline}</h2>
            <p>{deck}</p>
            <p>{category}</p>
        </div>
    )
}

export default MainArticle