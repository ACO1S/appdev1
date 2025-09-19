import './App.css'

import { useState } from 'react';

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
	setCount(count + 1);
  }
  return (
    <div>
      <h1>Lets count together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {

  return (
  <>
    <MyApp/>
  </>
  )
}

export default App
