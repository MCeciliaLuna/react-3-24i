import './App.css';
import Register from './components/Register/Register';

function App() {
  // const handleClick = async() => {
  //   const resp = await fetch('http://localhost:8000/')
  //   const json = await resp.json()

  //   console.log(json)
  // }

  return (
    <div className="App text-start text-light bg-dark">
      <section className="row gx-0">
        <div className="col-6">
      <Register />
      </div>
        <div className="col-6">
      <Register />
      </div>
      </section>
    </div>
  );
}

export default App;
