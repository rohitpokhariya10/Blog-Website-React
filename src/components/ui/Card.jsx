import React from 'react';
import styles from '../../css/ui/Card.module.css';
import { useNavigate } from 'react-router';

const Card = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/blog/${article.id}`)}>
      <div className={styles.top}>
        <div className={styles.tags}>
          {
            (article.tags || []).map((elem, idx) => {
              return (
                <span key={idx} className={styles.tag}> {elem} </span>
              )
            })
          }
        </div>
        <div className={styles.heading}>
          {
            article.title
          }
        </div>
      </div>

      <div className={styles.mid}>
        <div className={styles.para}>
          {
            article.desc || article.description
          }
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.details}>
          <div className={styles.detailCont}>
            <i className={`ri-user-line ${styles.icon}`}></i>
            <span className={styles.deatilText}>
              {article.author}
            </span>
          </div>
          <div className={styles.detailCont}>
            <i className={`ri-calendar-2-line ${styles.icon}`}></i>
            <span className={styles.deatilText}>
              {
                article.date
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
