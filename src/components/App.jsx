import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
  };

  conactList = contactData => {
    const contactArray = this.state.contacts;
    const filter = this.state.filter;
    console.log(filter);

    this.setState(prevState => {
      // console.log(prevState);
      return {
        contacts: [...contactArray, contactData],
      };
    });
    // console.log(prevState);
    // contacts: [...contactArray, contactData],
  };

  filterName = filter => {
    this.setState(prevState => {
      // console.log(prevState);
      return {
        filter: filter,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form conactList={this.conactList} />
        <Filter filterName={this.filterName} />
        <ContactList data={this.state.contacts} filter={this.state.filter} />
      </>
    );
  }
}
