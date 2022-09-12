import React from 'react'
import styles from './top.module.css'
export default function top() {
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <div>Published</div>
          <div>Scheduled</div>
          <div>Need Approvat</div>
          <div>Error</div>
          <div>Notes</div>
      </div>
      <img src="logo.png" className={styles.img} />
    </div>
  )
}
