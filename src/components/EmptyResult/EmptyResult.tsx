import style from './EmptyResult.module.css';

interface EmptyResultProps {
  searchQuery: string;
}

const EmptyResult = ({ searchQuery }: EmptyResultProps) => {
  return (
    <>
      <div className={style.empty}>
        <div>
          Nothing was found for the search term &quot;
          {searchQuery}
          &quot;.
        </div>
        <div>Don&apos;t forget, we are looking for Star Wars species o_0</div>
      </div>
    </>
  );
};

export { EmptyResult };
