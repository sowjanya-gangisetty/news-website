import { getCategoryArticles } from '../../data/data'
import ArticleWithImage from '../ArticleWithImage'
import ArticleWithoutImage from '../ArticleWithoutImage'
import MainArticle from '../MainArticle'
import styles from './selected-category.module.css'

const SelectedCategory = ({ category, updateFunction }) => {
    const articles = getCategoryArticles(category);

    return (
        <div className={styles.container}>
            <div className={styles.imageArticles}>
                {articles && articles.map((article, index) => index > 0 && index < 3 ? <ArticleWithImage key={index} content={article} setArticle={updateFunction} /> : '')}
            </div>
            <div className={styles.mainArticle}>
                {articles && <MainArticle article={articles[0]} setArticle={updateFunction} />}
            </div>
            <div className={styles.otherArticles}>
                {articles && articles.map((article, index) => index >= 3 ? <ArticleWithoutImage key={index} content={article} updateFunction={updateFunction}/> : '')}
            </div>
        </div>
    )
}

export default SelectedCategory