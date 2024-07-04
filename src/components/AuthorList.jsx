
export const AuthorsList = ({ authors = [], onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Funkcje</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.surname}</td>
          <td>
            <button onClick={() => onDelete(author.id)}>Usuń</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
