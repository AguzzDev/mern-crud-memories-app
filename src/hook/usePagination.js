import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const initialPage = () => {
    setCurrentPage(1)
  }
  const finalPage = () => {
    setCurrentPage(maxPage)
  }

  const filteredData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end)
  }

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return { initialPage, currentPage, filteredData, nextPage, prevPage, finalPage };
}

export default usePagination;