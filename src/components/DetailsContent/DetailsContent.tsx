import { Species } from '../../types';
import style from './DetailsContent.module.css';

const DetailsContent = ({ speciesData }: { speciesData: Species }) => {
  return (
    <>
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
    </>
  );
};

export { DetailsContent };
