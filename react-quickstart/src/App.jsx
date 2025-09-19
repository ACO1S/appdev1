import './App.css'

function MyButton() {
  function handleClick() {
    alert('Hello, User!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function App() {

  return (
  <>
    <MyButton/>
  </>
  )
}

export default App
