import React from 'react';
import Result from '../Result/Result';

export interface SearchPeopleResults {
  name: string;
}

interface ReturnedData {
  results: SearchPeopleResults[];
}

export default class Search extends React.Component {
  state: {
    userInput: string;
    searchResult: SearchPeopleResults[];
  } = {
    userInput: '',
    searchResult: [],
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
      userInput: this.state.userInput.trim(),
    });
    console.log(this.state.userInput);
    this.sendQuery(this.state.userInput);
  };

  sendQuery = async (searchString: string) => {
    await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
      .then((resp: Response) => {
        console.log('resp: ', resp);
        if (resp.status === 200) return resp.json();
      })
      .then((data: ReturnedData) => {
        console.log(data);
        this.setState({});
        if (data.results.length > 0) {
          this.setState({
            searchResult: data.results,
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
        <div>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClick}>
            Search
          </button>
        </div>

        {this.state.searchResult.length > 0 && (
          <Result searchResult={this.state.searchResult} />
        )}
      </>
    );
  }
}
