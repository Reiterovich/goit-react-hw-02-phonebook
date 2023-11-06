export const ContactList = (data, filter) => {
  const contArr = data.data;
  // console.log(contArr);
  // console.log(filter);
  console.log();

  return (
    <div>
      <p>dd</p>
      <ul>
        {contArr
          .filter(fil => fil.name == 'filter')
          .map(con => (
            <li key={con.id}>
              {con.name}: {con.number}
            </li>
          ))}
      </ul>
    </div>
  );
};
