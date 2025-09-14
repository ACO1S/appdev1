import './App.css'

const user = {
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100
};

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
    <button className="button">Click Me</button>
    </>
  )
}

function App() {
  const isTrue = true;

  let message;
  if (isTrue) {
    message = "Hello";
  } else {
    message = "Hi";
  }

  return (
  <>

    <h1>{message}</h1>

    <img
      className="picture"
      src={user.imageUrl}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        display: 'block',
        margin: '0 auto 20px'
      }}
    />

    <MyButton />
    <AboutPage />
  </>
  )
}

export default App
