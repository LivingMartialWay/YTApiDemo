import React from 'react';
import './SearchBar.css';
import logo from'./imgs/db.png';

class SearchBar extends React.Component {
  state ={ term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
       <img src={logo} alt="Daniel" className="header__logo"></img>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Dan's DarkTube:</label>
            <input
              style={{background: "#99AAB5"}}
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
