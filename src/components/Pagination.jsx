import { useState } from 'react';

function Pagination({ totalPages, onClick, setPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    setPage(pageNumber);

    onClick(pageNumber);
  };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     handlePageChange(currentPage + 1);
  //   }
  // };

  // const handleLastPage = () => {
  //   handlePageChange(totalPages);
  // };

  return (
    <div>
      {/* <button type="button" onClick={() => handlePageChange(1)}>First</button> */}
      {/* <button
        type="button"
        onClick={() => {
          if (currentPage > 1) {
            handlePageChange(currentPage - 1);
          }
        }}
      >
        Previous
      </button> */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          type="button"
          key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {/* <button type="button" onClick={handleNextPage}>
        Next
      </button>
      <button type="button" onClick={handleLastPage}>Last</button> */}
    </div>
  );
}

export default Pagination;
