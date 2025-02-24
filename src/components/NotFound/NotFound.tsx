import { Link, useNavigate } from 'react-router';
import style from './NotFound.module.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/themeContext';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/404', { replace: true });
  }, [navigate]);

  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.page_wrapper} data-theme={theme}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <Link to="/">
          <button type="button" className={style.to_main_button}>
            Back to the main page
          </button>
        </Link>
      </div>
    </div>
  );
}
