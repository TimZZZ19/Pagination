import React, { useState, useEffect } from "react";
import styles from "./PageNumberBtns.module.css";

const basePoint = 6;

function PageNumberBtns({
  pageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
}) {
  const [range, setRange] = useState({});

  useEffect(() => {
    let startIdx = 0;

    // If the length of pageNumbers is greater than 10, then reduced range of displayed page numbers
    // applys to the pageNumbers array; otherwise, just use the range of 0 - 10 on pageNumbers, it's
    // ok that 10 is out of the range because the slice method doesn't care.
    if (pageNumbers.at(-1) - basePoint > 4) {
      const relativeDifferenceFromBase = currentPageNumber - basePoint;

      // If the current page number comes anywhere after the base point, then the relative differnce
      // from the base point to the current page number happens to be the starting index of the new
      // reduced range; but if the current page comes before the base point, then it means that the
      // range will stay from 0 to 10.
      if (relativeDifferenceFromBase > 0) {
        startIdx = relativeDifferenceFromBase;

        // If the current page number comes among the last four page numbers, then we don't want to
        // keep shrinking the reduced range, in this case, the end index should be kept at the last
        // position of the pageNumbers array, and the start index is just end index minus 10; if the
        // current page number is not among the last four page numbers, after the intial calculation
        // of starting index shown above on line 27, we don't need this adjustment.
        if (relativeDifferenceFromBase + 10 > 20)
          startIdx = pageNumbers.length - 10;
      }
    }

    setRange({
      start: startIdx,
      end: startIdx + 10,
    });
  }, [currentPageNumber, pageNumbers]);

  const pageNumberChangeHandler = (e) =>
    setCurrentPageNumber(+e.target.innerText);

  const currentRange = pageNumbers.slice(range.start, range.end);

  return (
    <>
      {currentRange.map((number) => (
        <span
          className={`${styles["page-number-btn"]} ${
            number === currentPageNumber && styles["page-number-btn--active"]
          }`}
          key={number}
          onClick={pageNumberChangeHandler}
        >
          {number}
        </span>
      ))}
    </>
  );
}

export default PageNumberBtns;
