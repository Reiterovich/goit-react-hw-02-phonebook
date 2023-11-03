import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  conactList = contactData => {
    console.log(contactData);
  };

  render() {
    return (
      <>
        <Form conactList={this.conactList} />
      </>
    );
  }
}
