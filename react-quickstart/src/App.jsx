import './App.css'

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Good Day! <break />How are you?</p>
    </>
  )
}

function MyButton() {
  return (
    <>
    <button>Click Me</button>
    </>
  )
}

function App() {
  return (
    <>
      <MyButton/>
      <AboutPage/>
    </>
  )
}

export default App
