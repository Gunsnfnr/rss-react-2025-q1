import { useContext, useEffect } from 'react';
import style from './Page404.module.css';
import { useRouter } from 'next/router';
import { ThemeContext } from '../context/themeContext';

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404', undefined, { shallow: true });
  }, []);

  const handleToMainClick = () => {
    router.push('/');
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.page_wrapper} data-theme={theme}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <button type="button" className={style.to_main_button} onClick={handleToMainClick}>
          Back to the main page
        </button>
      </div>
    </div>
  );
};

export default Page404;
