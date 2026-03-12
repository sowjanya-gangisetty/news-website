import styles from './sports.module.css'
import ArticleWithImage from '../ArticleWithImage'
import {featuredSportsArticles} from '../../data/data';

const Sports = ({setArticle}) => {
    return (
        <div className={styles.sports}>
            {featuredSportsArticles.map((article, index) => <ArticleWithImage key={index} content={article} setArticle={setArticle} />)}
        </div>
    )
}

export default Sports