import styles from './features.module.css'
import Recent from '../Recent'
import MainArticle from '../MainArticle'
import Sports from '../Sports'

import {mainArticle} from '../../data/data'

const Features = ({updateFunction}) => {
    return (
        <div className={styles.features}>
            <Recent setArticle={updateFunction} />
            <MainArticle article={mainArticle} setArticle={updateFunction} />
            <Sports setArticle={updateFunction} />
        </div>
    )
}

export default Features