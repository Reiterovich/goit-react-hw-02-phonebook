import { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data
            .filter(fil =>
              fil.name.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map(con => (
              <li key={con.id}>
                {con.name}: {con.number}
                <button
                  onClick={evt => this.props.delete(con.id)}
                  type="button"
                >
                  delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

// export const ContactList = ({ data, filter }) => {
//   // const contArr = data.data;
//   // console.log(data);
//   // console.log(filter);
//   // console.log(filter);

//   return (
//     <div>
//       <ul>
//         {data
//           .filter(fil => fil.name.toLowerCase().includes(filter.toLowerCase()))
//           .map(con => (
//             <li key={con.id}>
//               {con.name}: {con.number}
//               <button onClick={evt => console.log(...data.id)} type="button">
//                 delete
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };
