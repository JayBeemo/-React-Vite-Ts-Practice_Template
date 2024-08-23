interface childProps {
  totalPage: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPageChange: (page: number) => void | Promise<void>;
}

export const Pagination = (props: childProps) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 5;
  let startPage: number, endPage: number;

  if (props.totalPage <= maxPageNumbersToShow) {
    startPage = 1;
    endPage = props.totalPage;
  } else if (props.currentPage <= 3) {
    startPage = 1;
    endPage = maxPageNumbersToShow;
  } else if (props.currentPage + 2 >= props.totalPage) {
    startPage = props.totalPage - 4;
    endPage = props.totalPage;
  } else {
    startPage = props.currentPage - 2;
    endPage = props.currentPage + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex w-[100%] h-[48px] flex-center gap-2">
      <button
        key={`page-hasPrevious`}
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        className={`
            w-[32px] h-[32px] rounded-md bg-gray-200
            isTablet:w-[30px] isTablet:h-[30px]
            isMobile:w-[28px] isMobile:h-[28px]
            ${
              props.currentPage !== 1
                ? "isDesktop:hover:bg-gray-100"
                : "opacity-30"
            }
            `}
      >
        <p className="font-PTD_Semibold text-[14px] isMobile:text-[12px]">{`<`}</p>
      </button>
      {pageNumbers.map((number) => (
        <button
          key={`page-item-${number}-${
            props.currentPage === number ? "active" : ""
          }`}
          onClick={() => props.onPageChange(number)}
          className={`
            w-[32px] h-[32px] rounded-md bg-gray-200
            isTablet:w-[30px] isTablet:h-[30px]
            isMobile:w-[28px] isMobile:h-[28px]
             ${
               props.currentPage === number
                 ? "bg-gray-300"
                 : "isDesktop:hover:bg-gray-100"
             }
            `}
        >
          <p className="font-PTD_Semibold text-[14px] isMobile:text-[12px]">
            {number}
          </p>
        </button>
      ))}
      <button
        key={`page-hasNext`}
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPage}
        className={`
            w-[32px] h-[32px] rounded-md bg-gray-200
            isTablet:w-[30px] isTablet:h-[30px]
            isMobile:w-[28px] isMobile:h-[28px]
            ${
              props.currentPage !== props.totalPage
                ? "isDesktop:hover:bg-gray-100"
                : "opacity-30"
            }
            `}
      >
        <p className="font-PTD_Semibold text-[14px] isMobile:text-[12px]">{`>`}</p>
      </button>
    </div>
  );
};

export default Pagination;
