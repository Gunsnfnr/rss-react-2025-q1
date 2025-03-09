import style from './Details.module.css';
import { Species } from '../../types';
import { useRouter } from 'next/router';
import useLoading from '../../hooks/useLoading';

const Details = ({ speciesData }: { speciesData: Species }) => {
  const [isDetailsLoading] = useLoading();
  const router = useRouter();
  const { pagenumber, search } = router.query;

  const handleCloseClick = () => {
    router.push(`/page/${pagenumber}/?search=${search}`);
  };

  return (
    <>
      {isDetailsLoading && <div className={style.loading_details}>Loading...</div>}
      {!isDetailsLoading && speciesData && (
        <>
          <div className={style.species_details_wrapper}>
            <div className={style.species_details}>
              <div className={style.name}>{speciesData.name}</div>
              <div className={style.species_data}>
                <div>
                  <span className={style.title}>Classification:</span>{' '}
                  <span className={style.text}>{speciesData.classification}</span>
                </div>
                <div>
                  <span className={style.title}>Average lifespan:</span>{' '}
                  <span className={style.text}>{speciesData.average_lifespan}</span>
                  <span className={style.text}>&nbsp;years</span>
                </div>
                <div>
                  <span className={style.title}>Average height:</span>{' '}
                  <span className={style.text}>{speciesData.average_height}</span>
                  <span className={style.text}>&nbsp;cm</span>
                </div>
                <div>
                  <span className={style.title}>Language:</span>{' '}
                  <span className={style.text}>{speciesData.language}</span>
                </div>
                <div>
                  <span className={style.title}>Eye colors:</span>{' '}
                  <span className={style.text}>{speciesData.eye_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Hair colors:</span>{' '}
                  <span className={style.text}>{speciesData.hair_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Skin colors:</span>{' '}
                  <span className={style.text}>{speciesData.skin_colors}</span>
                </div>
              </div>
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
