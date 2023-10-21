// Style
import * as S from './style';

// Icons
import leftArrow from '../../../assets/icons/chevron left.png';
import rightArrow from '../../../assets/icons/chevron right.png';
import { Dispatch, SetStateAction } from 'react';

// Component Type
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>
}

// ---

const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
  const generatePageButtons = () => {
    const start = currentPage - 1 < 1 ? 1 : currentPage - 1
    const arraySize = totalPages < 4 ? totalPages : 4
    let fillValue = 1

    if (currentPage === totalPages - 1) fillValue = currentPage - 2
    else if (currentPage === totalPages - 1) fillValue = currentPage - 3
    else fillValue = start

    return Array(arraySize)
      .fill(fillValue)
      .map((value, index) => value + index)
  }
  const pageRange = generatePageButtons()
 
  return (
    <S.PaginationContainer>
      <S.ArrowsButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
      >
        <img src={leftArrow} alt="Seta Esquerda" />
      </S.ArrowsButton>
      {pageRange.map((pageNumber) => (
        <S.PageButton key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
          {pageNumber}
        </S.PageButton>
      ))}      
      <S.ArrowsButton
        disabled={currentPage === totalPages - 1}
        onClick={() => setCurrentPage(currentPage + 1)}
        style={{ cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer' }}
      >
        <img src={rightArrow} alt="Seta Direita" />
      </S.ArrowsButton>
    </S.PaginationContainer>
  );
}

export default Pagination