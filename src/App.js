import { useEffect, useState } from "react";
import axios from 'axios';
// 外部套件通常統一放最前面

import logo from './asset/logo.svg';
import './asset/App.css';
import Input from './components/Input';
import './asset/all.scss';


function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async() => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="sampleText" text="this is an input" value={ text } onChangeHandler={ onChangeHandler } />
        <p>text: { text }</p>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

// 要記得匯出
export default App;
