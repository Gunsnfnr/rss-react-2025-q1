import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './SelectedCards.module.css';
import { removeAllCards } from '../../store/cardsSlice';
import { Download } from '../Download/Download';

const SelectedCards = () => {
  const numberOfSelectedCards = useSelector(
    (state: RootState) => state.speciesCards.selectedCards.length
  );

  const dispatch = useDispatch();
  const unselectAllHandler = () => {
    dispatch(removeAllCards());
  };

  return (
    numberOfSelectedCards > 0 && (
      <div className={style.flyout}>
        <div className={style.info}>{numberOfSelectedCards} item(-s) are selected</div>
        <div className={style.buttons}>
          <button onClick={unselectAllHandler}>Unselect all</button>
          <Download />
        </div>
      </div>
    )
  );
};

export { SelectedCards };
