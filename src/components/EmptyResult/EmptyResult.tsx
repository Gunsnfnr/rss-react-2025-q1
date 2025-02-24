import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './EmptyResult.module.css';
import { SerializedError } from '@reduxjs/toolkit';

interface EmptyResultProps {
  error?: FetchBaseQueryError | SerializedError | undefined;
}

const EmptyResult = ({ error }: EmptyResultProps) => {
  const [userInput] = useLocalStorage('');

  return (
    <>
      <div className={style.empty}>
        {error && 'status' in error && error?.status === 404 ? (
          <div>Nothing was found</div>
        ) : (
          <>
            <div>Nothing was found for the search term &quot;{userInput}&quot;</div>
            <div>Don&apos;t forget, we are looking for Star Wars species o_0</div>
          </>
        )}
        {error && 'status' in error && error.status !== 404 && (
          <div className={style.error}>Unfortunately, something went wrong :-/</div>
        )}
      </div>
    </>
  );
};

export { EmptyResult };
