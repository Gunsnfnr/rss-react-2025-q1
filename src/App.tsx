import React from 'react';
import { SearchSpeciesResults } from './types';
import Searcher from './components/Searcher/Searcher';
import Results from './components/Results/Results';
import EmptyResult from './components/EmptyResult/EmptyResult';
import { getSpecies } from './api/apiRequest';

interface SearchResults {
  results: SearchSpeciesResults[];
}

export default class App extends React.Component {
  state: {
    userInput: string;
    searchResults: SearchSpeciesResults[] | null;
    isLoading: boolean;
    isError: boolean;
  } = {
    userInput: '',
    searchResults: null,
    isLoading: true,
    isError: false,
  };

  handleSearchTermSend = async (userInput: string) => {
    this.setState({ isLoading: true, userInput: userInput.trim() });
    localStorage.setItem('gunsnfnr.swQuery', userInput.trim());
    await this.getSearchResults(userInput.trim());
  };

  getSearchResults: (searchString: string) => Promise<void> = async (searchString) => {
    getSpecies(searchString)
      .then((data: SearchResults) => {
        this.setState({
          isLoading: false,
          searchResults: data.results,
          isError: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
        });
        console.log(`${error}`);
      });
  };

  async componentDidMount() {
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');

    if (storedSearchTerm) {
      await this.getSearchResults(storedSearchTerm);
      this.setState({
        userInput: storedSearchTerm,
      });
    } else this.getSearchResults('');
  }

  render(): React.ReactNode {
    return (
      <>
        <Searcher searchTermSend={this.handleSearchTermSend} />
        <section className="results">
          {this.state.isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            Array.isArray(this.state.searchResults) &&
            (this.state.searchResults.length > 0 ? (
              <Results searchResults={this.state.searchResults} />
            ) : (
              <EmptyResult searchQuery={this.state.userInput} />
            ))
          )}
          {this.state.isError && (
            <div className="error">Unfortunately, something went wrong :-/</div>
          )}
        </section>
      </>
    );
  }
}
