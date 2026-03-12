import ArticleWithoutImage from "../ArticleWithoutImage"
import styles from "./recent.module.css"
import {recentArticles} from '../../data/data'

const Recent = ({setArticle}) => {
    return (
        <div className={styles.recent}>
            <h3 className={styles.recentTitle}>Recent News</h3>
            {recentArticles.map((article, index) => <ArticleWithoutImage key={index} content={article} updateFunction={setArticle} />)}
        </div>
    )
}

export default Recent