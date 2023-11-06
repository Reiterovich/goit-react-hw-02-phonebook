import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleSubmit = evt => {
    evt.preventDefault();
    const contact = this.state.name;
    const number = this.state.number;

    const id = nanoid();

    const contactData = {
      name: contact,
      number: number,
      id: id,
    };

    this.props.conactList(contactData);
  };

  handleInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    console.log(evt.target.name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
          <br />
          <h2>Number</h2>
          <input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <br />
        <h2>Contacts</h2>
      </>
    );
  }
}
