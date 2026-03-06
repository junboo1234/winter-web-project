import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="APP">
        <h1>반가워요! 나만의 첫 웹사이트입니다.</h1>
        <p>앞으로 이곳을 멋지게 채워나갈 거예요.</p>
        <button onClick={() => alert('버튼을 누르셨군요!')}>클릭해보세요</button>
      </header>
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
