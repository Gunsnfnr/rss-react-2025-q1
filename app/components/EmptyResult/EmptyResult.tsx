import { useSearchParams } from 'react-router';
import style from './EmptyResult.module.css';

const EmptyResult = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get('search');

  return (
    <>
      <div className={style.empty}>
        <div>Nothing was found for the search term &quot;{userInput}&quot;</div>
        <div>Don&apos;t forget, we are looking for Star Wars species o_0</div>
      </div>
    </>
  );
};

export { EmptyResult };
