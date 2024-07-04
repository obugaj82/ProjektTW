
export const CreateAuthor = ({ onCreate }) => (
  <fieldset  class="daneotot">
    <label>Wpisz dane:</label>
    <br></br>
    <form onSubmit={onCreate} class="imienazw">
      <div >
        <label htmlFor="name">Imię</label>
        <input id="name" name="name" />
      </div>
      <div>
        <label htmlFor="surname">Nazwisko</label>
        <input id="surname" name="surname" />
      </div>
      <button>Stwórz</button>
    </form>
  </fieldset>
);
