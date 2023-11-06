import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    // console.log(evt.target.value);
    this.setState({
      [name]: value,
    });

    const filter = this.state.filter;

    // console.log(filterApp);
    this.props.filterName(filter);
  };

  render() {
    return (
      <>
        <p>Find contacts by neme</p>
        <input
          name="filter"
          value={this.state.filter}
          type="text"
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}
