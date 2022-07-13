import logo from './logo.svg';
import './App.css';
import commerce from './lib/commerce';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    commerce.categories.list().then((products) => {
      console.log(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
