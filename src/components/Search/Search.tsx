import React from 'react';
import Results from '../Results/Results';
import EmptyResult from '../EmptyResult/EmptyResult';
import './Search.css';

export interface SearchPeopleResults {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

interface ReturnedData {
  results: SearchPeopleResults[];
}

export default class Search extends React.Component {
  state: {
    userInput: string;
    searchResults: SearchPeopleResults[] | null;
    loading: boolean;
  } = {
    userInput: '',
    searchResults: null,
    loading: false,
  };

  handleChange = (event: React.ChangeEvent) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        userInput: event.target.value,
      });
    }
  };

  handleClick = () => {
    this.setState({
      loading: true,
      userInput: this.state.userInput.trim(),
    });
    localStorage.setItem(
      'gunsnfnr.swQuery',
      JSON.stringify(this.state.userInput.trim())
    );
    console.log(this.state.userInput.trim());
    this.sendQuery(this.state.userInput.trim());
  };

  sendQuery = async (searchString: string) => {
    await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
      .then((resp: Response) => {
        console.log('resp: ', resp);
        if (resp.status === 200) return resp.json();
      })
      .then((data: ReturnedData) => {
        console.log(data);
        this.setState({
          loading: false,
        });
        if (data.results.length > 0) {
          this.setState({
            searchResults: data.results,
          });
        } else {
          this.setState({
            searchResults: [],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const storedSearchString: string | null =
      localStorage.getItem('gunsnfnr.swQuery');
    if (storedSearchString) {
      this.sendQuery(JSON.parse(storedSearchString));
    } else this.sendQuery('');
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="search">
          <input
            className="input-field"
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClick}>
            Search
          </button>
        </div>

        <section className="results">
          {this.state.loading && <div>Loading...</div>}
          {!this.state.loading &&
            Array.isArray(this.state.searchResults) &&
            (this.state.searchResults.length > 0 ? (
              <Results searchResults={this.state.searchResults} />
            ) : (
              <EmptyResult searchQuery={this.state.userInput} />
            ))}
        </section>
      </>
    );
  }
}
