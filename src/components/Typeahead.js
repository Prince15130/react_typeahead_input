import React, { Component } from "react";

export class Typeahead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChange = (e) => {
    const { cities } = this.props;
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      suggestions = cities.filter(
        (city) => city.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    }
    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  onSelect = (value) => {
    this.setState(() => ({
      suggestions: [],
      text: value,
    }));
  };

  renderOptions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <div>
          <ul>
            {suggestions.map((city) => {
              return (
                <div>
                  <li key={city} onClick={(e) => this.onSelect(city)}>
                    {city}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={text}
            onChange={this.onTextChange}
            placeholder="Select Place"
          ></input>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default Typeahead;
