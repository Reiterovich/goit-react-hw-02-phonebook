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
    // const filter = this.state.filter;
    console.log(contactData.name);

    for (let i = 0; i < contactArray.length; i += 1) {
      const arr = contactArray[i].name;

      if (contactData.name.toLowerCase() === arr.toLowerCase()) {
        window.alert(`${contactData.name} is already in contacts!`);
        return;
      }
    }

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
    this.setState({ filter });
  };

  delete = id => {
    console.log(id);
    this.setState({
      contacts: this.state.contacts.filter(product => product.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form conactList={this.conactList} />
        <Filter filter={this.state.filter} filterName={this.filterName} />
        <ContactList
          delete={this.delete}
          data={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
