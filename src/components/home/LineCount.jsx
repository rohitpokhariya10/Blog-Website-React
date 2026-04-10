import React from 'react';
import styles from '../../css/home/LineCount.module.css';
import { useArticles } from '../../context/ArticleContext';

const LineCount = () => {
  const { articles } = useArticles();
  const publishedCount = articles.filter((article) => article.type == "publish").length;

  return (
    <div className={styles.line}>
      <p className={styles.head}>Latest Articles</p>
      <p className={styles.subHead}> {publishedCount} articles </p>
    </div>
  )
}

export default React.memo(LineCount)
