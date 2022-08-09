import React from 'react'
import styles from './PaginationBtn.module.css'

function PaginationBtn({ clickHandler, children, secondaryClass }) {
  return (
    <button
      className={`${styles['pagination-btn']}  ${secondaryClass}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default PaginationBtn
