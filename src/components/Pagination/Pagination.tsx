import { useNavigate, useParams } from 'react-router';
import style from './Pagination.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface PaginationProps {
  nextPage: string | null;
}

const Pagination = (props: PaginationProps) => {
  const { pageId } = useParams();
  const page = Number(pageId);
  const navigate = useNavigate();
  const [userInput] = useLocalStorage('');

  const handleNavBtn = (page: number) => {
    navigate(`/page/${page}?search=${userInput}`);
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
