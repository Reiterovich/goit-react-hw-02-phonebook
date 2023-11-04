import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  conactList = contactData => {
    const contactArray = this.state.contacts;

    this.setState(prevState => {
      console.log(prevState);
      return {
        contacts: [...contactArray, contactData],
      };
    });
    // console.log(prevState);
    // contacts: [...contactArray, contactData],
  };

  render() {
    return (
      <>
        <Form conactList={this.conactList} />
        <ContactList data={this.state.contacts} />
      </>
    );
  }
}
