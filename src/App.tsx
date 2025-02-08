import { useEffect, useState } from 'react';
import { SearchSpeciesResults } from './types';
import { Searcher } from './components/Searcher/Searcher';
import { Results } from './components/Results/Results';
import { EmptyResult } from './components/EmptyResult/EmptyResult';
import { getSpecies } from './api/apiRequest';
import { useLocalStorage } from './hooks/useLocalStorage';

interface SearchResults {
  results: SearchSpeciesResults[];
}

const App = () => {
  const [userInput, setUserInput] = useLocalStorage('');
  const [searchResults, setSearchResults] = useState<SearchSpeciesResults[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userInput) {
      getSearchResults(userInput);
      setUserInput(userInput);
    } else getSearchResults('');
  }, [userInput, setUserInput]);

  const handleSearchTermSend = async (userInput: string) => {
    setIsLoading(true);
    setUserInput(userInput.trim());
    await getSearchResults(userInput.trim());
  };

  const getSearchResults: (searchString: string) => Promise<void> = async (searchString) => {
    getSpecies(searchString)
      .then((data: SearchResults) => {
        setIsLoading(false);
        setSearchResults(data.results);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(`${error}`);
      });
  };

  return (
    <>
      <Searcher searchTermSend={handleSearchTermSend} />
      <section className="results">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          Array.isArray(searchResults) &&
          (searchResults.length > 0 ? (
            <Results searchResults={searchResults} />
          ) : (
            <EmptyResult searchQuery={userInput} />
          ))
        )}
        {isError && <div className="error">Unfortunately, something went wrong :-/</div>}
      </section>
    </>
  );
};

export { App };
