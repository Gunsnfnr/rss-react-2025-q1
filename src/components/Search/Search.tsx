import React from 'react';
import Result from '../Result/Result';
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
    searchResult: SearchPeopleResults[] | null;
    loading: boolean;
  } = {
    userInput: '',
    searchResult: null,
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
    console.log(this.state.userInput);
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
            searchResult: data.results,
          });
        } else {
          this.setState({
            searchResult: [],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            Array.isArray(this.state.searchResult) &&
            (this.state.searchResult.length > 0 ? (
              <Result searchResult={this.state.searchResult} />
            ) : (
              <EmptyResult searchQuery={this.state.userInput} />
            ))}
        </section>
      </>
    );
  }
}
