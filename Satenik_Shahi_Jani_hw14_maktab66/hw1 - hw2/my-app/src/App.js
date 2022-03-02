// import logo from './logo.svg';
// import './App.css';
import './style-app.css';
import Counter from './Counter';
import ColorGenerator from './ColorGenerator';

function App() {
  return (
    <div className='flex-two-part'>
      <Counter/>
      <ColorGenerator/>
    </div>
  );
}

export default App;



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>