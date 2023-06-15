import { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  margin: 3rem;
`;

const Button = styled.button`
  font-size: 3rem;
  background: transparent;
  cursor: pointer;
  margin-right: 5rem;
`;

function Pagination({ totalPages, onClick, setPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    setPage(pageNumber);

    onClick(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    handlePageChange(totalPages);
  };

  return (
    <Container>
      <Button type="button" onClick={() => handlePageChange(1)}>⏮</Button>
      <Button
        type="button"
        onClick={() => {
          if (currentPage > 1) {
            handlePageChange(currentPage - 1);
          }
        }}
      >
        ◀️
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          type="button"
          key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button type="button" onClick={handleNextPage}>
        ▶️
      </Button>
      <Button type="button" onClick={handleLastPage}>⏭</Button>
    </Container>
  );
}

export default Pagination;
