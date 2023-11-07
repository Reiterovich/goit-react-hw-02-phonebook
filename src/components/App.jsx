import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  conactList = contactData => {
    const contactArray = this.state.contacts;

    if (contactArray.some(elm => elm.name === contactData.name)) {
      window.alert(`${contactData.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...contactArray, contactData],
      };
    });
  };

  filterName = filter => {
    this.setState({ filter });
  };

  delete = id => {
    this.setState({
      contacts: this.state.contacts.filter(product => product.id !== id),
    });
  };

  filterApp = () => {
    const arrey = this.state.contacts.filter(fil =>
      fil.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return arrey;
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form conactList={this.conactList} />
        <Filter filter={this.state.filter} filterName={this.filterName} />
        <ContactList delete={this.delete} data={this.filterApp} />
      </>
    );
  }
}
