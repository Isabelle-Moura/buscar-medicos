import { useState, useEffect } from 'react';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const Pagination = <T extends any>({
  items,
  itemsPerPage,
  renderItem,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedItems(items.slice(startIndex, endIndex));
  }, [items, itemsPerPage, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{renderItem(item, index)}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
    </>
  );
};

export default Pagination