import style from './Pagination.module.css';

interface PaginationProps {
  handleBtn: (page: number) => void;
  page: number;
  nextPage: string | null;
}

const Pagination = (props: PaginationProps) => {
  const handleNavBtn = (page: number) => {
    props.handleBtn(page);
  };

  return (
    <div className={style.pagination}>
      <button
        className={style.prev}
        onClick={() => handleNavBtn(props.page - 1)}
        disabled={props.page === 1}
      >
        Prev
      </button>
      <div className={style.page_number}>{props.page}</div>
      <button
        className={style.next}
        onClick={() => handleNavBtn(props.page + 1)}
        disabled={!props.nextPage}
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
