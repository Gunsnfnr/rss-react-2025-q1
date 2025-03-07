import { useSelector } from 'react-redux';
import style from './Download.module.css';
import { RootState } from '../../store';

const Download = () => {
  const selectedCards = useSelector((state: RootState) => state.speciesCards.selectedCards);
  const numberOfSelectedCards = useSelector(
    (state: RootState) => state.speciesCards.selectedCards.length
  );
  const getACsv = (): string => {
    const download = (data: string) => {
      const blob = new Blob([data], { type: 'text/csv' });
      return URL.createObjectURL(blob);
    };

    const prepareData = () => {
      const csvRows = [];
      const headers = Object.keys(selectedCards[0]);
      csvRows.push(headers.join(';'));

      selectedCards.forEach((card) => {
        const values = Object.values(card);
        csvRows.push(values.join(';'));
      });
      return csvRows.join('\n');
    };

    const resultingCSV = prepareData();

    return download(resultingCSV);
  };

  return (
    <a
      className={style.button}
      href={getACsv()}
      download={`Sw_species_${numberOfSelectedCards}.csv`}
    >
      Download
    </a>
  );
};

export { Download };
