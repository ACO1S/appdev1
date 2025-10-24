import './App.css'

function Profile() {
  return (
    <img
      src="https://i.scdn.co/image/ab67616d00001e02394048503e3be0e65e962638"
      alt="Multo"
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Song of the Year</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}