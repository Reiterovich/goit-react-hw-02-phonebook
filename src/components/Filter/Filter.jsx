import { Component } from 'react';

// export const ContactList = ({ data, filter }) => {

export class Filter extends Component {
  // state = {
  //   filter: '',
  // };

  handleInputChange = evt => {
    // const name = evt.target.name;
    const value = evt.target.value;
    // const filter = this.state.filter;
    // console.log(evt.target.value);
    // this.setState({
    //   filter: value,
    // });
    // console.log(filterApp);
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
