import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
  };

  hendleSubmit = evt => {
    evt.preventDefault();
    const contact = this.state.name;
    const id = nanoid();

    const contactData = {
      name: contact,
      id: id,
    };

    this.props.conactList(contactData);
  };

  handleInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
