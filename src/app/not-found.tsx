// 'use client';

// import { useContext } from 'react';
import style from './Page404.module.css';
// import { useRouter } from 'next/navigation';
// import { ThemeContext } from '../context/themeContext';
import Link from 'next/link';
const NotFound = () => {
  // const router = useRouter();

  // const handleToMainClick = () => {
  //   router.push('/');
  // };

  // const { theme } = useContext(ThemeContext);

  return (
    <div
      className={style.page_wrapper}
      // data-theme={theme}
    >
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>

        <Link href="/">
          <button
            type="button"
            className={style.to_main_button}
            //  onClick={handleToMainClick
          >
            Back to the main page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
