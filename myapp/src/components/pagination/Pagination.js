import styles from './Pagination.module.css'
import PageCapacitySelect from './PageCapacitySelect'
import PageNumberBtns from './PageNumberBtns'
import Prev from './Prev'
import Next from './Next'

function Pagination({
  todos,
  currentPageNumber,
  pageCapacity,
  setPageCapacity,
  setCurrentPageNumber,
}) {
  const pageNumbers = [
    ...Array(Math.ceil(todos.length / pageCapacity + 1)).keys(),
  ].slice(1)

  return (
    <div className={styles.pagination}>
      <Prev
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <PageNumberBtns
        pageNumbers={pageNumbers}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <Next
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        pageNumbers={pageNumbers}
      />
      <PageCapacitySelect
        todos={todos}
        setPageCapacity={setPageCapacity}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </div>
  )
}

export default Pagination
