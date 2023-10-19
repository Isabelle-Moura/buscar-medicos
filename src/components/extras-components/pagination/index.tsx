// Pagination.js

import * as S from './style';
import leftArrow from '../../../assets/icons/chevron left.png';
import rightArrow from '../../../assets/icons/chevron right.png';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePageButtons = () => {
    const buttons = [];
    const maxButtons = 4;
    let startPage = currentPage - Math.floor(maxButtons / 2);
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxButtons + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <S.PageButton
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </S.PageButton>
      );
    }
    return buttons;
  };

  return (
    <S.PaginationContainer>
      {currentPage >= 0 && (
        <S.ArrowsButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1 - 1}
        style={{ cursor: currentPage === 0 ? 'not-allowed' : 'pointer' }}>
          <img src={leftArrow} alt="Seta Esquerda" />
        </S.ArrowsButton>
      )}
      {generatePageButtons()}
      {currentPage <= totalPages && (
        <S.ArrowsButton onClick={() => handlePageChange(currentPage + 1)}  disabled={currentPage === totalPages - 1}
        style={{ cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer' }}>
          <img src={rightArrow} alt="Seta Direita" />
        </S.ArrowsButton>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
