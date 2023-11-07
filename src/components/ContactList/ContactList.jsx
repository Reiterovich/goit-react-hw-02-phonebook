import { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data().map(con => (
            <li key={con.id}>
              {con.name}: {con.number}
              <button onClick={evt => this.props.delete(con.id)} type="button">
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
