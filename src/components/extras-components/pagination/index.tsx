// Component Type
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Style
import * as S from './style'

// ---

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
     <S.PaginationContainer>
      {pages.map((page) => (
        <S.PageButton
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </S.PageButton>
      ))}
     </S.PaginationContainer>
     </>
  );
};

export default Pagination;