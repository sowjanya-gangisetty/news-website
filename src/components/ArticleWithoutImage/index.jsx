import styles from './article.module.css'

const ArticleWithoutImage = ({content, updateFunction}) => {
    let {headline, deck, category} = content;

    const handleClick = () => {
        updateFunction(content)
    }
    
    return (
        <div onClick = {handleClick} className={styles.article}>
            <div className={styles.headline}>{headline}. {deck}</div>
            <div className={styles.category}>{category}</div>
        </div>
    )
}

export default ArticleWithoutImage