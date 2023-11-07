import { Component } from 'react';

export class Filter extends Component {
  handleInputChange = evt => {
    const value = evt.target.value;

    this.props.filterName(value);
  };

  render() {
    return (
      <>
        <p>Find contacts by neme</p>
        <input
          name="filter"
          value={this.props.filter}
          type="text"
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}
