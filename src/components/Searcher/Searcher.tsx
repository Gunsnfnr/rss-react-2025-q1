import React, { Component } from 'react';
import './Searcher.css';
import ErrorButton from '../ErrorButton/ErrorButton';

interface SearcherProps {
  searchTermSend: (userInput: string) => void;
}

export default class Searcher extends Component<SearcherProps> {
  state: {
    userInput: string;
  } = {
    userInput: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  handleClick: () => void = () => {
    this.setState({ userInput: this.state.userInput.trim() });
    this.props.searchTermSend(this.state.userInput);
  };

  componentDidMount(): void {
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');

    if (storedSearchTerm) {
      this.setState({
        userInput: storedSearchTerm,
      });
    }
  }
  render() {
    return (
      <div className="search">
        <input
          className="input-field"
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => {
            this.handleClick();
          }}
        >
          Search
        </button>
        <ErrorButton />
      </div>
    );
  }
}
