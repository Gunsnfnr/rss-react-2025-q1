import style from './Pagination.module.css';
import { useRouter } from 'next/router';

interface PaginationProps {
  nextPage: string | null;
  setIsLoading: (loading: boolean) => void;
}

const Pagination = (props: PaginationProps) => {
  const router = useRouter();
  const { pagenumber, search } = router.query;
  const page = Number(pagenumber);

  const handleNavBtn = (page: number) => {
    props.setIsLoading(true);
    router.push(`/page/${page}?search=${search}`);
  };

  return (
    <div className={style.pagination}>
      <button className={style.prev} onClick={() => handleNavBtn(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <div className={style.page_number}>{page}</div>
      <button
        className={style.next}
        onClick={() => handleNavBtn(page + 1)}
        disabled={!props.nextPage}
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
