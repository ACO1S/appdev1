import './App.css'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Song List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Mutlo"
        />
        <Item
          isPacked={true}
          name="Favourite Clothes"
        />
        <Item
          isPacked={false}
          name="Umaasa"
        />
      </ul>
    </section>
  );
}

