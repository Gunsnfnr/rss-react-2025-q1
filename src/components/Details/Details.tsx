import style from './Details.module.css';
import { Species } from '../../types';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DetailsContent } from '../DetailsContent/DetailsContent';

const Details = ({ speciesData }: { speciesData: Species }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = useParams();
  const { pagenumber } = params as Record<string, string>;
  const search = searchParams?.get('search') ?? '';
  const id = searchParams?.get('id');

  useEffect(() => {
    if (!speciesData && id) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [speciesData, id]);

  const handleCloseClick = () => {
    router.push(`/page/${pagenumber}/?search=${search}`);
  };

  return (
    <>
      {isLoading && <div className={style.loading_details}>Loading...</div>}
      {!isLoading && speciesData && (
        <>
          <div className={style.species_details_wrapper}>
            <div className={style.species_details}>
              {speciesData && 'detail' in speciesData ? (
                <div className={style.not_found}>Not found</div>
              ) : (
                <DetailsContent speciesData={speciesData} />
              )}
              <button onClick={handleCloseClick} className={style.close}>
                Close
              </button>
            </div>
          </div>
          <div
            className={style.details_backdrop}
            onClick={handleCloseClick}
            aria-label="Close"
          ></div>
        </>
      )}
    </>
  );
};

export { Details };
