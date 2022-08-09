import React from 'react'
import styles from './Prev.module.css'
import PaginationBtn from './PaginationBtn'

function Prev({ currentPageNumber, setCurrentPageNumber }) {
  const paginationBtnClickHandler = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber((currPageNum) => currPageNum - 1)
    }
  }
  return (
    <PaginationBtn
      secondaryClass={`${styles['prev-btn']}`}
      clickHandler={paginationBtnClickHandler}
    >
      prev
    </PaginationBtn>
  )
}

export default Prev
