export const ContactList = data => {
  const contArr = data.data;
  // console.log(data.data);
  return (
    <div>
      <ul>
        {contArr.map(con => (
          <li key={con.id}>{con.name}</li>
        ))}
      </ul>
    </div>
  );
};
